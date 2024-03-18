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

export interface IWork {
    _id: string;
    title: string;
    coverImage: {
        public_id: string;
        secure_url: string;
    };
    createdAt: string;
    updatedAt: string;
}
