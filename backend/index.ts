import express, { Request, Response } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { sequelize, User } from './models/User';

dotenv.config();

const app = express();
const port = 3001;

const clientID = process.env.CLIENT_ID!;
const clientSecret = process.env.CLIENT_SECRET!;
const baseUrl = process.env.BASE_URL!;

// OAuth
app.get('/auth/github', (req: Request, res: Response) => {
    const redirectUri = `https://github.com/login/oauth/authorize?client_id=${clientID}&redirect_uri=${baseUrl}/auth/github/callback`;
    res.redirect(redirectUri);
});

// Callback
app.get('/auth/github/callback', async (req: Request, res: Response) => {
    const { code } = req.query;
    try {
        const tokenResponse = await axios.post(
            'https://github.com/login/oauth/access_token',
            {
                client_id: clientID,
                client_secret: clientSecret,
                code,
            },
            {
                headers: {
                    Accept: 'application/json',
                },
            }
        );

        const accessToken = tokenResponse.data.access_token;

        const userResponse = await axios.get('https://api.github.com/user', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        const userData = userResponse.data;

        let user = await User.findOne({ where: { githubId: userData.id } });

        if (!user) {
            user = await User.create({
                githubId: userData.id,
                login: userData.login,
                name: userData.name,
                avatarUrl: userData.avatar_url,
            });
        }

        res.redirect(`http://localhost:3000/?user=${user.name}`);
    } catch (error) {
        console.error('Erro na autenticação:', error);
        res.status(500).send('Erro na autenticação');
    }
});

sequelize.sync().then(() => {
    console.log('Banco de dados sincronizado');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
