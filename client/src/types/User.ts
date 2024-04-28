type User = {
    docId: string;
    age: number;
    name: string;
    detailInfo?: {
        imageUrl: string;
        country: string;
        job: string;
        gender: string;
        email: string;
    };
  };

  export default User;