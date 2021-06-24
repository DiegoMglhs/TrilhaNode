import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { UsersRepositories } from "../repositories/UsersRepositories";

interface ICreateComplimentRequest {
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string
}

class CreateComplimentService {

    async execute({ tag_id, user_receiver, user_sender, message }: ICreateComplimentRequest) {
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
        const usersRepositories = getCustomRepository(UsersRepositories);

        if (user_sender === user_receiver) {
            throw new Error("Incorrect User Receiver");

        }

        const userReceiverExistis = await usersRepositories.findOne(user_receiver)

        if (!userReceiverExistis) {
            throw new Error("User Receiver dos not exists!");
        }
        const compliement = complimentsRepositories.create({
            tag_id,
            user_receiver,
            user_sender,
            message,
        });

        await complimentsRepositories.save(compliement);

        return compliement;

    }
}

export { CreateComplimentService }