
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class AddToFavouriteInput {
    movieId: number;
    userId: number;
}

export class CreateUserInput {
    email: string;
    name: string;
    password?: Nullable<string>;
}

export class LoginUserInput {
    email: string;
    password: string;
}

export class UpdateUserInput {
    id: number;
    email?: Nullable<string>;
    name?: Nullable<string>;
    password?: Nullable<string>;
}

export class MediaQueryResponse {
    id?: Nullable<number>;
    adult?: Nullable<boolean>;
    backdrop_path?: Nullable<string>;
    genre_ids?: Nullable<Nullable<number>[]>;
    original_language?: Nullable<string>;
    original_title?: Nullable<string>;
    overview?: Nullable<string>;
    popularity?: Nullable<number>;
    poster_path?: Nullable<string>;
    release_date?: Nullable<string>;
    title?: Nullable<string>;
    video?: Nullable<boolean>;
    vote_average?: Nullable<number>;
    vote_count?: Nullable<number>;
}

export class MessageResponse {
    message?: Nullable<string>;
}

export class InitResponse {
    preview?: Nullable<Nullable<MediaQueryResponse>[]>;
    trending?: Nullable<Nullable<MediaQueryResponse>[]>;
    topRated?: Nullable<Nullable<MediaQueryResponse>[]>;
}

export abstract class IQuery {
    abstract searchMovies(title: string): Nullable<MediaQueryResponse>[] | Promise<Nullable<MediaQueryResponse>[]>;

    abstract getMovie(id: number): MediaQueryResponse | Promise<MediaQueryResponse>;

    abstract getFavourites(userId: number): Nullable<Nullable<MediaQueryResponse>[]> | Promise<Nullable<Nullable<MediaQueryResponse>[]>>;

    abstract init(): Nullable<InitResponse> | Promise<Nullable<InitResponse>>;

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract addFavourite(addToFavourite?: Nullable<AddToFavouriteInput>): Nullable<MessageResponse> | Promise<Nullable<MessageResponse>>;

    abstract createUser(createUserInput: CreateUserInput): Nullable<CreateUserResponse> | Promise<Nullable<CreateUserResponse>>;

    abstract login(loginUserInput: LoginUserInput): Nullable<LoginUserResponse> | Promise<Nullable<LoginUserResponse>>;

    abstract updateUser(updateUserInput: UpdateUserInput): Nullable<User> | Promise<Nullable<User>>;

    abstract removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export class User {
    id?: Nullable<number>;
    email?: Nullable<string>;
    name?: Nullable<string>;
    password?: Nullable<string>;
    message?: Nullable<string>;
    createdAt?: Nullable<string>;
    updatedAt?: Nullable<string>;
    token?: Nullable<string>;
}

export class CreateUserResponse {
    id?: Nullable<number>;
    name?: Nullable<string>;
    email?: Nullable<string>;
    message?: Nullable<string>;
    token?: Nullable<string>;
}

export class LoginUserResponse {
    id?: Nullable<number>;
    name?: Nullable<string>;
    email?: Nullable<string>;
    message?: Nullable<string>;
    token?: Nullable<string>;
}

export class UpdateUserResponse {
    id?: Nullable<number>;
    email?: Nullable<string>;
    name?: Nullable<string>;
    message?: Nullable<string>;
}

type Nullable<T> = T | null;
