import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"

interface IPayload {
    sub: string
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

    //receber o token
    const authToken = request.headers.authorization;

    //validar se token está preechido
    if (!authToken) {
        return response.status(401).end();
    }
    //como entre o Bearer e o token tem um espaço no split sinalizamos o espaço como o ponto de separação
    // em Js se colocarmos [, nomedevariavel] ele irá ignorar essa primeiro posição!
    const [, token] = authToken.split(" ");

    //validar se token é válido
    try {
        const { sub } = verify(token, "6c687767dadde63f3c951a6c1ba9ead3") as IPayload;

        //Recuperar informações do usuário
        request.user_id = sub;

        return next();
    } catch (err) {
        return response.status(401).end()
    }


}