/// <reference types="mongoose" />
export declare type UserDocument = User & Document;
export declare class User {
    _id?: string;
    username: string;
    email: string;
    password: string;
}
export declare const UserSchema: import("mongoose").Schema<import("mongoose").Document<User, any, any>, import("mongoose").Model<import("mongoose").Document<User, any, any>, any, any>, undefined, {}>;
