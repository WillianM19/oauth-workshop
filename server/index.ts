import express, { Request, Response } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const clientID = process.env.CLIENT_ID!;
const clientSecret = process.env.CLIENT_SECRET!;
const baseUrl = process.env.BASE_URL!;

// OAuth
app.get('/auth/github', (req: Request, res: Response) => {
    const redirectUri = `https://github.com/login/oauth/authorize?client_id=${clientID}&redirect_uri=${baseUrl}/auth/github/callback`;
    res.redirect(redirectUri);
});

// Banco
import { sequelize, User } from './models/User';

// Sincronizar o banco de dados
sequelize.sync().then(() => {
    console.log('Banco de dados sincronizado');
});


// Callback
app.get('/auth/github/callback', async (req: Request, res: Response) => {
    const { code } = req.query;

    try {
        // Troca do código de autorização pelo token de acesso
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

        // Obter informações do usuário
        const userResponse = await axios.get('https://api.github.com/user', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        // Retorna os dados do usuário como resposta
        res.json(userResponse.data);
    } catch (error) {
        res.status(500).send('Erro na autenticação');
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
