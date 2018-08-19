export class RecipeModel {
    constructor(
        public _id: string,
        public title: string,
        public summary: string,
        public imageUrl: string,
        public ingredients: string,
        public directions: string,
        public prepTime: string,
        public cookingTime: string,
        public serves: string,
        public calories: string,
        public _acl: string
    ) { }
}