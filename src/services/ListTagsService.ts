import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"
import { classToPlain } from "class-transformer"


class ListTagsService {
    async execute() {
        const tagsRepositories = getCustomRepository(TagsRepositories);

        const tags = await tagsRepositories.find();
        //tags = tags.map((tag) => ({ ...tag, nameCustom: `#${tag.name}` })); /*iria ser vir para adcionar uma nova informação vizualmente


        return classToPlain(tags);

    }
}

export { ListTagsService }