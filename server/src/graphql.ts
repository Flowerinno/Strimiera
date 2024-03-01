
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateMediaQueryInput {
    message: string;
}

export class UpdateMediaQueryInput {
    id: number;
}

export class CreateUserInput {
    email: string;
    name: string;
    password?: Nullable<string>;
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

export abstract class IQuery {
    abstract searchMovies(title: string): Nullable<MediaQueryResponse>[] | Promise<Nullable<MediaQueryResponse>[]>;

    abstract getMovie(id: number): MediaQueryResponse | Promise<MediaQueryResponse>;

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createMediaQuery(createMediaQueryInput: CreateMediaQueryInput): MediaQueryResponse | Promise<MediaQueryResponse>;

    abstract updateMediaQuery(updateMediaQueryInput: UpdateMediaQueryInput): MediaQueryResponse | Promise<MediaQueryResponse>;

    abstract removeMediaQuery(id: number): Nullable<MediaQueryResponse> | Promise<Nullable<MediaQueryResponse>>;

    abstract createUser(createUserInput: CreateUserInput): Nullable<CreateUserResponse> | Promise<Nullable<CreateUserResponse>>;

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
}

export class CreateUserResponse {
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
