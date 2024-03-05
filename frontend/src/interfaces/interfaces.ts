export interface IService {
    _id: string;
    name: string;
    description: string;
    category: string;
    coverImage: {
        public_id: string;
        secure_url: string;
    };
    createdAt: string;
    updatedAt: string;
}
