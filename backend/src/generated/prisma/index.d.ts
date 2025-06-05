
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Drone
 * 
 */
export type Drone = $Result.DefaultSelection<Prisma.$DronePayload>
/**
 * Model Route
 * 
 */
export type Route = $Result.DefaultSelection<Prisma.$RoutePayload>
/**
 * Model FlightHistory
 * 
 */
export type FlightHistory = $Result.DefaultSelection<Prisma.$FlightHistoryPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Detection
 * 
 */
export type Detection = $Result.DefaultSelection<Prisma.$DetectionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DroneStatus: {
  ACTIVE: 'ACTIVE',
  IDLE: 'IDLE',
  MAINTENANCE: 'MAINTENANCE',
  OFFLINE: 'OFFLINE'
};

export type DroneStatus = (typeof DroneStatus)[keyof typeof DroneStatus]


export const EventType: {
  SYSTEM: 'SYSTEM',
  ALERT: 'ALERT',
  DETECTION: 'DETECTION',
  INFO: 'INFO'
};

export type EventType = (typeof EventType)[keyof typeof EventType]


export const Severity: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL'
};

export type Severity = (typeof Severity)[keyof typeof Severity]

}

export type DroneStatus = $Enums.DroneStatus

export const DroneStatus: typeof $Enums.DroneStatus

export type EventType = $Enums.EventType

export const EventType: typeof $Enums.EventType

export type Severity = $Enums.Severity

export const Severity: typeof $Enums.Severity

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Roles
 * const roles = await prisma.role.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Roles
   * const roles = await prisma.role.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.drone`: Exposes CRUD operations for the **Drone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drones
    * const drones = await prisma.drone.findMany()
    * ```
    */
  get drone(): Prisma.DroneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.route`: Exposes CRUD operations for the **Route** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Routes
    * const routes = await prisma.route.findMany()
    * ```
    */
  get route(): Prisma.RouteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flightHistory`: Exposes CRUD operations for the **FlightHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FlightHistories
    * const flightHistories = await prisma.flightHistory.findMany()
    * ```
    */
  get flightHistory(): Prisma.FlightHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detection`: Exposes CRUD operations for the **Detection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Detections
    * const detections = await prisma.detection.findMany()
    * ```
    */
  get detection(): Prisma.DetectionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Role: 'Role',
    User: 'User',
    Drone: 'Drone',
    Route: 'Route',
    FlightHistory: 'FlightHistory',
    Event: 'Event',
    Detection: 'Detection'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "role" | "user" | "drone" | "route" | "flightHistory" | "event" | "detection"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Drone: {
        payload: Prisma.$DronePayload<ExtArgs>
        fields: Prisma.DroneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DroneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DronePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DroneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DronePayload>
          }
          findFirst: {
            args: Prisma.DroneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DronePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DroneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DronePayload>
          }
          findMany: {
            args: Prisma.DroneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DronePayload>[]
          }
          create: {
            args: Prisma.DroneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DronePayload>
          }
          createMany: {
            args: Prisma.DroneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DroneCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DronePayload>[]
          }
          delete: {
            args: Prisma.DroneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DronePayload>
          }
          update: {
            args: Prisma.DroneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DronePayload>
          }
          deleteMany: {
            args: Prisma.DroneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DroneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DroneUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DronePayload>[]
          }
          upsert: {
            args: Prisma.DroneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DronePayload>
          }
          aggregate: {
            args: Prisma.DroneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDrone>
          }
          groupBy: {
            args: Prisma.DroneGroupByArgs<ExtArgs>
            result: $Utils.Optional<DroneGroupByOutputType>[]
          }
          count: {
            args: Prisma.DroneCountArgs<ExtArgs>
            result: $Utils.Optional<DroneCountAggregateOutputType> | number
          }
        }
      }
      Route: {
        payload: Prisma.$RoutePayload<ExtArgs>
        fields: Prisma.RouteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RouteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RouteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          findFirst: {
            args: Prisma.RouteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RouteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          findMany: {
            args: Prisma.RouteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          create: {
            args: Prisma.RouteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          createMany: {
            args: Prisma.RouteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RouteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          delete: {
            args: Prisma.RouteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          update: {
            args: Prisma.RouteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          deleteMany: {
            args: Prisma.RouteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RouteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RouteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          upsert: {
            args: Prisma.RouteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          aggregate: {
            args: Prisma.RouteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoute>
          }
          groupBy: {
            args: Prisma.RouteGroupByArgs<ExtArgs>
            result: $Utils.Optional<RouteGroupByOutputType>[]
          }
          count: {
            args: Prisma.RouteCountArgs<ExtArgs>
            result: $Utils.Optional<RouteCountAggregateOutputType> | number
          }
        }
      }
      FlightHistory: {
        payload: Prisma.$FlightHistoryPayload<ExtArgs>
        fields: Prisma.FlightHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlightHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlightHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightHistoryPayload>
          }
          findFirst: {
            args: Prisma.FlightHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlightHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightHistoryPayload>
          }
          findMany: {
            args: Prisma.FlightHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightHistoryPayload>[]
          }
          create: {
            args: Prisma.FlightHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightHistoryPayload>
          }
          createMany: {
            args: Prisma.FlightHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FlightHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightHistoryPayload>[]
          }
          delete: {
            args: Prisma.FlightHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightHistoryPayload>
          }
          update: {
            args: Prisma.FlightHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightHistoryPayload>
          }
          deleteMany: {
            args: Prisma.FlightHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlightHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FlightHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightHistoryPayload>[]
          }
          upsert: {
            args: Prisma.FlightHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightHistoryPayload>
          }
          aggregate: {
            args: Prisma.FlightHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlightHistory>
          }
          groupBy: {
            args: Prisma.FlightHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlightHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlightHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<FlightHistoryCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Detection: {
        payload: Prisma.$DetectionPayload<ExtArgs>
        fields: Prisma.DetectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DetectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DetectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionPayload>
          }
          findFirst: {
            args: Prisma.DetectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DetectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionPayload>
          }
          findMany: {
            args: Prisma.DetectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionPayload>[]
          }
          create: {
            args: Prisma.DetectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionPayload>
          }
          createMany: {
            args: Prisma.DetectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DetectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionPayload>[]
          }
          delete: {
            args: Prisma.DetectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionPayload>
          }
          update: {
            args: Prisma.DetectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionPayload>
          }
          deleteMany: {
            args: Prisma.DetectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DetectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DetectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionPayload>[]
          }
          upsert: {
            args: Prisma.DetectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionPayload>
          }
          aggregate: {
            args: Prisma.DetectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetection>
          }
          groupBy: {
            args: Prisma.DetectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DetectionCountArgs<ExtArgs>
            result: $Utils.Optional<DetectionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    role?: RoleOmit
    user?: UserOmit
    drone?: DroneOmit
    route?: RouteOmit
    flightHistory?: FlightHistoryOmit
    event?: EventOmit
    detection?: DetectionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    drones: number
    routes: number
    flightHistory: number
    events: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drones?: boolean | UserCountOutputTypeCountDronesArgs
    routes?: boolean | UserCountOutputTypeCountRoutesArgs
    flightHistory?: boolean | UserCountOutputTypeCountFlightHistoryArgs
    events?: boolean | UserCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDronesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DroneWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoutesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFlightHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlightHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Count Type DroneCountOutputType
   */

  export type DroneCountOutputType = {
    routes: number
    flightHistory: number
    events: number
    detections: number
  }

  export type DroneCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    routes?: boolean | DroneCountOutputTypeCountRoutesArgs
    flightHistory?: boolean | DroneCountOutputTypeCountFlightHistoryArgs
    events?: boolean | DroneCountOutputTypeCountEventsArgs
    detections?: boolean | DroneCountOutputTypeCountDetectionsArgs
  }

  // Custom InputTypes
  /**
   * DroneCountOutputType without action
   */
  export type DroneCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneCountOutputType
     */
    select?: DroneCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DroneCountOutputType without action
   */
  export type DroneCountOutputTypeCountRoutesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteWhereInput
  }

  /**
   * DroneCountOutputType without action
   */
  export type DroneCountOutputTypeCountFlightHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlightHistoryWhereInput
  }

  /**
   * DroneCountOutputType without action
   */
  export type DroneCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * DroneCountOutputType without action
   */
  export type DroneCountOutputTypeCountDetectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetectionWhereInput
  }


  /**
   * Count Type RouteCountOutputType
   */

  export type RouteCountOutputType = {
    flights: number
  }

  export type RouteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flights?: boolean | RouteCountOutputTypeCountFlightsArgs
  }

  // Custom InputTypes
  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteCountOutputType
     */
    select?: RouteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeCountFlightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlightHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly name: FieldRef<"Role", 'String'>
    readonly description: FieldRef<"Role", 'String'>
    readonly createdAt: FieldRef<"Role", 'DateTime'>
    readonly updatedAt: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    roleId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    roleId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    passwordHash: string | null
    fullName: string | null
    roleId: number | null
    isActive: boolean | null
    lastLogin: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    passwordHash: string | null
    fullName: string | null
    roleId: number | null
    isActive: boolean | null
    lastLogin: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    passwordHash: number
    fullName: number
    roleId: number
    isActive: number
    lastLogin: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    roleId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    roleId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    passwordHash?: true
    fullName?: true
    roleId?: true
    isActive?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    passwordHash?: true
    fullName?: true
    roleId?: true
    isActive?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    passwordHash?: true
    fullName?: true
    roleId?: true
    isActive?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    email: string
    passwordHash: string
    fullName: string | null
    roleId: number
    isActive: boolean
    lastLogin: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    fullName?: boolean
    roleId?: boolean
    isActive?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    drones?: boolean | User$dronesArgs<ExtArgs>
    routes?: boolean | User$routesArgs<ExtArgs>
    flightHistory?: boolean | User$flightHistoryArgs<ExtArgs>
    events?: boolean | User$eventsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    fullName?: boolean
    roleId?: boolean
    isActive?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    fullName?: boolean
    roleId?: boolean
    isActive?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    fullName?: boolean
    roleId?: boolean
    isActive?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "passwordHash" | "fullName" | "roleId" | "isActive" | "lastLogin" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    drones?: boolean | User$dronesArgs<ExtArgs>
    routes?: boolean | User$routesArgs<ExtArgs>
    flightHistory?: boolean | User$flightHistoryArgs<ExtArgs>
    events?: boolean | User$eventsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      drones: Prisma.$DronePayload<ExtArgs>[]
      routes: Prisma.$RoutePayload<ExtArgs>[]
      flightHistory: Prisma.$FlightHistoryPayload<ExtArgs>[]
      events: Prisma.$EventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      passwordHash: string
      fullName: string | null
      roleId: number
      isActive: boolean
      lastLogin: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    drones<T extends User$dronesArgs<ExtArgs> = {}>(args?: Subset<T, User$dronesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    routes<T extends User$routesArgs<ExtArgs> = {}>(args?: Subset<T, User$routesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    flightHistory<T extends User$flightHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$flightHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlightHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    events<T extends User$eventsArgs<ExtArgs> = {}>(args?: Subset<T, User$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly roleId: FieldRef<"User", 'Int'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.drones
   */
  export type User$dronesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInclude<ExtArgs> | null
    where?: DroneWhereInput
    orderBy?: DroneOrderByWithRelationInput | DroneOrderByWithRelationInput[]
    cursor?: DroneWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DroneScalarFieldEnum | DroneScalarFieldEnum[]
  }

  /**
   * User.routes
   */
  export type User$routesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    where?: RouteWhereInput
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    cursor?: RouteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * User.flightHistory
   */
  export type User$flightHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightHistory
     */
    select?: FlightHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlightHistory
     */
    omit?: FlightHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightHistoryInclude<ExtArgs> | null
    where?: FlightHistoryWhereInput
    orderBy?: FlightHistoryOrderByWithRelationInput | FlightHistoryOrderByWithRelationInput[]
    cursor?: FlightHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlightHistoryScalarFieldEnum | FlightHistoryScalarFieldEnum[]
  }

  /**
   * User.events
   */
  export type User$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Drone
   */

  export type AggregateDrone = {
    _count: DroneCountAggregateOutputType | null
    _avg: DroneAvgAggregateOutputType | null
    _sum: DroneSumAggregateOutputType | null
    _min: DroneMinAggregateOutputType | null
    _max: DroneMaxAggregateOutputType | null
  }

  export type DroneAvgAggregateOutputType = {
    id: number | null
    batteryLevel: number | null
    latitude: number | null
    longitude: number | null
    altitude: number | null
    speed: number | null
    ownerId: number | null
  }

  export type DroneSumAggregateOutputType = {
    id: number | null
    batteryLevel: number | null
    latitude: number | null
    longitude: number | null
    altitude: number | null
    speed: number | null
    ownerId: number | null
  }

  export type DroneMinAggregateOutputType = {
    id: number | null
    name: string | null
    model: string | null
    serialNumber: string | null
    status: $Enums.DroneStatus | null
    batteryLevel: number | null
    latitude: number | null
    longitude: number | null
    altitude: number | null
    speed: number | null
    ownerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DroneMaxAggregateOutputType = {
    id: number | null
    name: string | null
    model: string | null
    serialNumber: string | null
    status: $Enums.DroneStatus | null
    batteryLevel: number | null
    latitude: number | null
    longitude: number | null
    altitude: number | null
    speed: number | null
    ownerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DroneCountAggregateOutputType = {
    id: number
    name: number
    model: number
    serialNumber: number
    status: number
    batteryLevel: number
    latitude: number
    longitude: number
    altitude: number
    speed: number
    ownerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DroneAvgAggregateInputType = {
    id?: true
    batteryLevel?: true
    latitude?: true
    longitude?: true
    altitude?: true
    speed?: true
    ownerId?: true
  }

  export type DroneSumAggregateInputType = {
    id?: true
    batteryLevel?: true
    latitude?: true
    longitude?: true
    altitude?: true
    speed?: true
    ownerId?: true
  }

  export type DroneMinAggregateInputType = {
    id?: true
    name?: true
    model?: true
    serialNumber?: true
    status?: true
    batteryLevel?: true
    latitude?: true
    longitude?: true
    altitude?: true
    speed?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DroneMaxAggregateInputType = {
    id?: true
    name?: true
    model?: true
    serialNumber?: true
    status?: true
    batteryLevel?: true
    latitude?: true
    longitude?: true
    altitude?: true
    speed?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DroneCountAggregateInputType = {
    id?: true
    name?: true
    model?: true
    serialNumber?: true
    status?: true
    batteryLevel?: true
    latitude?: true
    longitude?: true
    altitude?: true
    speed?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DroneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drone to aggregate.
     */
    where?: DroneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drones to fetch.
     */
    orderBy?: DroneOrderByWithRelationInput | DroneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DroneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Drones
    **/
    _count?: true | DroneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DroneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DroneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DroneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DroneMaxAggregateInputType
  }

  export type GetDroneAggregateType<T extends DroneAggregateArgs> = {
        [P in keyof T & keyof AggregateDrone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDrone[P]>
      : GetScalarType<T[P], AggregateDrone[P]>
  }




  export type DroneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DroneWhereInput
    orderBy?: DroneOrderByWithAggregationInput | DroneOrderByWithAggregationInput[]
    by: DroneScalarFieldEnum[] | DroneScalarFieldEnum
    having?: DroneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DroneCountAggregateInputType | true
    _avg?: DroneAvgAggregateInputType
    _sum?: DroneSumAggregateInputType
    _min?: DroneMinAggregateInputType
    _max?: DroneMaxAggregateInputType
  }

  export type DroneGroupByOutputType = {
    id: number
    name: string
    model: string
    serialNumber: string
    status: $Enums.DroneStatus
    batteryLevel: number
    latitude: number | null
    longitude: number | null
    altitude: number | null
    speed: number | null
    ownerId: number
    createdAt: Date
    updatedAt: Date
    _count: DroneCountAggregateOutputType | null
    _avg: DroneAvgAggregateOutputType | null
    _sum: DroneSumAggregateOutputType | null
    _min: DroneMinAggregateOutputType | null
    _max: DroneMaxAggregateOutputType | null
  }

  type GetDroneGroupByPayload<T extends DroneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DroneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DroneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DroneGroupByOutputType[P]>
            : GetScalarType<T[P], DroneGroupByOutputType[P]>
        }
      >
    >


  export type DroneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    model?: boolean
    serialNumber?: boolean
    status?: boolean
    batteryLevel?: boolean
    latitude?: boolean
    longitude?: boolean
    altitude?: boolean
    speed?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    routes?: boolean | Drone$routesArgs<ExtArgs>
    flightHistory?: boolean | Drone$flightHistoryArgs<ExtArgs>
    events?: boolean | Drone$eventsArgs<ExtArgs>
    detections?: boolean | Drone$detectionsArgs<ExtArgs>
    _count?: boolean | DroneCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drone"]>

  export type DroneSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    model?: boolean
    serialNumber?: boolean
    status?: boolean
    batteryLevel?: boolean
    latitude?: boolean
    longitude?: boolean
    altitude?: boolean
    speed?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drone"]>

  export type DroneSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    model?: boolean
    serialNumber?: boolean
    status?: boolean
    batteryLevel?: boolean
    latitude?: boolean
    longitude?: boolean
    altitude?: boolean
    speed?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drone"]>

  export type DroneSelectScalar = {
    id?: boolean
    name?: boolean
    model?: boolean
    serialNumber?: boolean
    status?: boolean
    batteryLevel?: boolean
    latitude?: boolean
    longitude?: boolean
    altitude?: boolean
    speed?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DroneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "model" | "serialNumber" | "status" | "batteryLevel" | "latitude" | "longitude" | "altitude" | "speed" | "ownerId" | "createdAt" | "updatedAt", ExtArgs["result"]["drone"]>
  export type DroneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    routes?: boolean | Drone$routesArgs<ExtArgs>
    flightHistory?: boolean | Drone$flightHistoryArgs<ExtArgs>
    events?: boolean | Drone$eventsArgs<ExtArgs>
    detections?: boolean | Drone$detectionsArgs<ExtArgs>
    _count?: boolean | DroneCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DroneIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DroneIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DronePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Drone"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      routes: Prisma.$RoutePayload<ExtArgs>[]
      flightHistory: Prisma.$FlightHistoryPayload<ExtArgs>[]
      events: Prisma.$EventPayload<ExtArgs>[]
      detections: Prisma.$DetectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      model: string
      serialNumber: string
      status: $Enums.DroneStatus
      batteryLevel: number
      latitude: number | null
      longitude: number | null
      altitude: number | null
      speed: number | null
      ownerId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["drone"]>
    composites: {}
  }

  type DroneGetPayload<S extends boolean | null | undefined | DroneDefaultArgs> = $Result.GetResult<Prisma.$DronePayload, S>

  type DroneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DroneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DroneCountAggregateInputType | true
    }

  export interface DroneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Drone'], meta: { name: 'Drone' } }
    /**
     * Find zero or one Drone that matches the filter.
     * @param {DroneFindUniqueArgs} args - Arguments to find a Drone
     * @example
     * // Get one Drone
     * const drone = await prisma.drone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DroneFindUniqueArgs>(args: SelectSubset<T, DroneFindUniqueArgs<ExtArgs>>): Prisma__DroneClient<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Drone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DroneFindUniqueOrThrowArgs} args - Arguments to find a Drone
     * @example
     * // Get one Drone
     * const drone = await prisma.drone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DroneFindUniqueOrThrowArgs>(args: SelectSubset<T, DroneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DroneClient<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Drone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneFindFirstArgs} args - Arguments to find a Drone
     * @example
     * // Get one Drone
     * const drone = await prisma.drone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DroneFindFirstArgs>(args?: SelectSubset<T, DroneFindFirstArgs<ExtArgs>>): Prisma__DroneClient<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Drone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneFindFirstOrThrowArgs} args - Arguments to find a Drone
     * @example
     * // Get one Drone
     * const drone = await prisma.drone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DroneFindFirstOrThrowArgs>(args?: SelectSubset<T, DroneFindFirstOrThrowArgs<ExtArgs>>): Prisma__DroneClient<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drones
     * const drones = await prisma.drone.findMany()
     * 
     * // Get first 10 Drones
     * const drones = await prisma.drone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const droneWithIdOnly = await prisma.drone.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DroneFindManyArgs>(args?: SelectSubset<T, DroneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Drone.
     * @param {DroneCreateArgs} args - Arguments to create a Drone.
     * @example
     * // Create one Drone
     * const Drone = await prisma.drone.create({
     *   data: {
     *     // ... data to create a Drone
     *   }
     * })
     * 
     */
    create<T extends DroneCreateArgs>(args: SelectSubset<T, DroneCreateArgs<ExtArgs>>): Prisma__DroneClient<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Drones.
     * @param {DroneCreateManyArgs} args - Arguments to create many Drones.
     * @example
     * // Create many Drones
     * const drone = await prisma.drone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DroneCreateManyArgs>(args?: SelectSubset<T, DroneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Drones and returns the data saved in the database.
     * @param {DroneCreateManyAndReturnArgs} args - Arguments to create many Drones.
     * @example
     * // Create many Drones
     * const drone = await prisma.drone.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Drones and only return the `id`
     * const droneWithIdOnly = await prisma.drone.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DroneCreateManyAndReturnArgs>(args?: SelectSubset<T, DroneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Drone.
     * @param {DroneDeleteArgs} args - Arguments to delete one Drone.
     * @example
     * // Delete one Drone
     * const Drone = await prisma.drone.delete({
     *   where: {
     *     // ... filter to delete one Drone
     *   }
     * })
     * 
     */
    delete<T extends DroneDeleteArgs>(args: SelectSubset<T, DroneDeleteArgs<ExtArgs>>): Prisma__DroneClient<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Drone.
     * @param {DroneUpdateArgs} args - Arguments to update one Drone.
     * @example
     * // Update one Drone
     * const drone = await prisma.drone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DroneUpdateArgs>(args: SelectSubset<T, DroneUpdateArgs<ExtArgs>>): Prisma__DroneClient<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Drones.
     * @param {DroneDeleteManyArgs} args - Arguments to filter Drones to delete.
     * @example
     * // Delete a few Drones
     * const { count } = await prisma.drone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DroneDeleteManyArgs>(args?: SelectSubset<T, DroneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drones
     * const drone = await prisma.drone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DroneUpdateManyArgs>(args: SelectSubset<T, DroneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drones and returns the data updated in the database.
     * @param {DroneUpdateManyAndReturnArgs} args - Arguments to update many Drones.
     * @example
     * // Update many Drones
     * const drone = await prisma.drone.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Drones and only return the `id`
     * const droneWithIdOnly = await prisma.drone.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DroneUpdateManyAndReturnArgs>(args: SelectSubset<T, DroneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Drone.
     * @param {DroneUpsertArgs} args - Arguments to update or create a Drone.
     * @example
     * // Update or create a Drone
     * const drone = await prisma.drone.upsert({
     *   create: {
     *     // ... data to create a Drone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Drone we want to update
     *   }
     * })
     */
    upsert<T extends DroneUpsertArgs>(args: SelectSubset<T, DroneUpsertArgs<ExtArgs>>): Prisma__DroneClient<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Drones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneCountArgs} args - Arguments to filter Drones to count.
     * @example
     * // Count the number of Drones
     * const count = await prisma.drone.count({
     *   where: {
     *     // ... the filter for the Drones we want to count
     *   }
     * })
    **/
    count<T extends DroneCountArgs>(
      args?: Subset<T, DroneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DroneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Drone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DroneAggregateArgs>(args: Subset<T, DroneAggregateArgs>): Prisma.PrismaPromise<GetDroneAggregateType<T>>

    /**
     * Group by Drone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DroneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DroneGroupByArgs['orderBy'] }
        : { orderBy?: DroneGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DroneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDroneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Drone model
   */
  readonly fields: DroneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Drone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DroneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    routes<T extends Drone$routesArgs<ExtArgs> = {}>(args?: Subset<T, Drone$routesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    flightHistory<T extends Drone$flightHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Drone$flightHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlightHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    events<T extends Drone$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Drone$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    detections<T extends Drone$detectionsArgs<ExtArgs> = {}>(args?: Subset<T, Drone$detectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Drone model
   */
  interface DroneFieldRefs {
    readonly id: FieldRef<"Drone", 'Int'>
    readonly name: FieldRef<"Drone", 'String'>
    readonly model: FieldRef<"Drone", 'String'>
    readonly serialNumber: FieldRef<"Drone", 'String'>
    readonly status: FieldRef<"Drone", 'DroneStatus'>
    readonly batteryLevel: FieldRef<"Drone", 'Int'>
    readonly latitude: FieldRef<"Drone", 'Float'>
    readonly longitude: FieldRef<"Drone", 'Float'>
    readonly altitude: FieldRef<"Drone", 'Float'>
    readonly speed: FieldRef<"Drone", 'Float'>
    readonly ownerId: FieldRef<"Drone", 'Int'>
    readonly createdAt: FieldRef<"Drone", 'DateTime'>
    readonly updatedAt: FieldRef<"Drone", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Drone findUnique
   */
  export type DroneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInclude<ExtArgs> | null
    /**
     * Filter, which Drone to fetch.
     */
    where: DroneWhereUniqueInput
  }

  /**
   * Drone findUniqueOrThrow
   */
  export type DroneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInclude<ExtArgs> | null
    /**
     * Filter, which Drone to fetch.
     */
    where: DroneWhereUniqueInput
  }

  /**
   * Drone findFirst
   */
  export type DroneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInclude<ExtArgs> | null
    /**
     * Filter, which Drone to fetch.
     */
    where?: DroneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drones to fetch.
     */
    orderBy?: DroneOrderByWithRelationInput | DroneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drones.
     */
    cursor?: DroneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drones.
     */
    distinct?: DroneScalarFieldEnum | DroneScalarFieldEnum[]
  }

  /**
   * Drone findFirstOrThrow
   */
  export type DroneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInclude<ExtArgs> | null
    /**
     * Filter, which Drone to fetch.
     */
    where?: DroneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drones to fetch.
     */
    orderBy?: DroneOrderByWithRelationInput | DroneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drones.
     */
    cursor?: DroneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drones.
     */
    distinct?: DroneScalarFieldEnum | DroneScalarFieldEnum[]
  }

  /**
   * Drone findMany
   */
  export type DroneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInclude<ExtArgs> | null
    /**
     * Filter, which Drones to fetch.
     */
    where?: DroneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drones to fetch.
     */
    orderBy?: DroneOrderByWithRelationInput | DroneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Drones.
     */
    cursor?: DroneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drones.
     */
    skip?: number
    distinct?: DroneScalarFieldEnum | DroneScalarFieldEnum[]
  }

  /**
   * Drone create
   */
  export type DroneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInclude<ExtArgs> | null
    /**
     * The data needed to create a Drone.
     */
    data: XOR<DroneCreateInput, DroneUncheckedCreateInput>
  }

  /**
   * Drone createMany
   */
  export type DroneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Drones.
     */
    data: DroneCreateManyInput | DroneCreateManyInput[]
  }

  /**
   * Drone createManyAndReturn
   */
  export type DroneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * The data used to create many Drones.
     */
    data: DroneCreateManyInput | DroneCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Drone update
   */
  export type DroneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInclude<ExtArgs> | null
    /**
     * The data needed to update a Drone.
     */
    data: XOR<DroneUpdateInput, DroneUncheckedUpdateInput>
    /**
     * Choose, which Drone to update.
     */
    where: DroneWhereUniqueInput
  }

  /**
   * Drone updateMany
   */
  export type DroneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Drones.
     */
    data: XOR<DroneUpdateManyMutationInput, DroneUncheckedUpdateManyInput>
    /**
     * Filter which Drones to update
     */
    where?: DroneWhereInput
    /**
     * Limit how many Drones to update.
     */
    limit?: number
  }

  /**
   * Drone updateManyAndReturn
   */
  export type DroneUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * The data used to update Drones.
     */
    data: XOR<DroneUpdateManyMutationInput, DroneUncheckedUpdateManyInput>
    /**
     * Filter which Drones to update
     */
    where?: DroneWhereInput
    /**
     * Limit how many Drones to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Drone upsert
   */
  export type DroneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInclude<ExtArgs> | null
    /**
     * The filter to search for the Drone to update in case it exists.
     */
    where: DroneWhereUniqueInput
    /**
     * In case the Drone found by the `where` argument doesn't exist, create a new Drone with this data.
     */
    create: XOR<DroneCreateInput, DroneUncheckedCreateInput>
    /**
     * In case the Drone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DroneUpdateInput, DroneUncheckedUpdateInput>
  }

  /**
   * Drone delete
   */
  export type DroneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInclude<ExtArgs> | null
    /**
     * Filter which Drone to delete.
     */
    where: DroneWhereUniqueInput
  }

  /**
   * Drone deleteMany
   */
  export type DroneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drones to delete
     */
    where?: DroneWhereInput
    /**
     * Limit how many Drones to delete.
     */
    limit?: number
  }

  /**
   * Drone.routes
   */
  export type Drone$routesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    where?: RouteWhereInput
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    cursor?: RouteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Drone.flightHistory
   */
  export type Drone$flightHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightHistory
     */
    select?: FlightHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlightHistory
     */
    omit?: FlightHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightHistoryInclude<ExtArgs> | null
    where?: FlightHistoryWhereInput
    orderBy?: FlightHistoryOrderByWithRelationInput | FlightHistoryOrderByWithRelationInput[]
    cursor?: FlightHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlightHistoryScalarFieldEnum | FlightHistoryScalarFieldEnum[]
  }

  /**
   * Drone.events
   */
  export type Drone$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Drone.detections
   */
  export type Drone$detectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection
     */
    select?: DetectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection
     */
    omit?: DetectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionInclude<ExtArgs> | null
    where?: DetectionWhereInput
    orderBy?: DetectionOrderByWithRelationInput | DetectionOrderByWithRelationInput[]
    cursor?: DetectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetectionScalarFieldEnum | DetectionScalarFieldEnum[]
  }

  /**
   * Drone without action
   */
  export type DroneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInclude<ExtArgs> | null
  }


  /**
   * Model Route
   */

  export type AggregateRoute = {
    _count: RouteCountAggregateOutputType | null
    _avg: RouteAvgAggregateOutputType | null
    _sum: RouteSumAggregateOutputType | null
    _min: RouteMinAggregateOutputType | null
    _max: RouteMaxAggregateOutputType | null
  }

  export type RouteAvgAggregateOutputType = {
    id: number | null
    createdBy: number | null
    droneId: number | null
  }

  export type RouteSumAggregateOutputType = {
    id: number | null
    createdBy: number | null
    droneId: number | null
  }

  export type RouteMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdBy: number | null
    droneId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RouteMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdBy: number | null
    droneId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RouteCountAggregateOutputType = {
    id: number
    name: number
    description: number
    coordinates: number
    createdBy: number
    droneId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RouteAvgAggregateInputType = {
    id?: true
    createdBy?: true
    droneId?: true
  }

  export type RouteSumAggregateInputType = {
    id?: true
    createdBy?: true
    droneId?: true
  }

  export type RouteMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdBy?: true
    droneId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RouteMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdBy?: true
    droneId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RouteCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    coordinates?: true
    createdBy?: true
    droneId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RouteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Route to aggregate.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Routes
    **/
    _count?: true | RouteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RouteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RouteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RouteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RouteMaxAggregateInputType
  }

  export type GetRouteAggregateType<T extends RouteAggregateArgs> = {
        [P in keyof T & keyof AggregateRoute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoute[P]>
      : GetScalarType<T[P], AggregateRoute[P]>
  }




  export type RouteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteWhereInput
    orderBy?: RouteOrderByWithAggregationInput | RouteOrderByWithAggregationInput[]
    by: RouteScalarFieldEnum[] | RouteScalarFieldEnum
    having?: RouteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RouteCountAggregateInputType | true
    _avg?: RouteAvgAggregateInputType
    _sum?: RouteSumAggregateInputType
    _min?: RouteMinAggregateInputType
    _max?: RouteMaxAggregateInputType
  }

  export type RouteGroupByOutputType = {
    id: number
    name: string
    description: string | null
    coordinates: JsonValue
    createdBy: number
    droneId: number | null
    createdAt: Date
    updatedAt: Date
    _count: RouteCountAggregateOutputType | null
    _avg: RouteAvgAggregateOutputType | null
    _sum: RouteSumAggregateOutputType | null
    _min: RouteMinAggregateOutputType | null
    _max: RouteMaxAggregateOutputType | null
  }

  type GetRouteGroupByPayload<T extends RouteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RouteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RouteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RouteGroupByOutputType[P]>
            : GetScalarType<T[P], RouteGroupByOutputType[P]>
        }
      >
    >


  export type RouteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    coordinates?: boolean
    createdBy?: boolean
    droneId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    drone?: boolean | Route$droneArgs<ExtArgs>
    flights?: boolean | Route$flightsArgs<ExtArgs>
    _count?: boolean | RouteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["route"]>

  export type RouteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    coordinates?: boolean
    createdBy?: boolean
    droneId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    drone?: boolean | Route$droneArgs<ExtArgs>
  }, ExtArgs["result"]["route"]>

  export type RouteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    coordinates?: boolean
    createdBy?: boolean
    droneId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    drone?: boolean | Route$droneArgs<ExtArgs>
  }, ExtArgs["result"]["route"]>

  export type RouteSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    coordinates?: boolean
    createdBy?: boolean
    droneId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RouteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "coordinates" | "createdBy" | "droneId" | "createdAt" | "updatedAt", ExtArgs["result"]["route"]>
  export type RouteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    drone?: boolean | Route$droneArgs<ExtArgs>
    flights?: boolean | Route$flightsArgs<ExtArgs>
    _count?: boolean | RouteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RouteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    drone?: boolean | Route$droneArgs<ExtArgs>
  }
  export type RouteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    drone?: boolean | Route$droneArgs<ExtArgs>
  }

  export type $RoutePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Route"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      drone: Prisma.$DronePayload<ExtArgs> | null
      flights: Prisma.$FlightHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      coordinates: Prisma.JsonValue
      createdBy: number
      droneId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["route"]>
    composites: {}
  }

  type RouteGetPayload<S extends boolean | null | undefined | RouteDefaultArgs> = $Result.GetResult<Prisma.$RoutePayload, S>

  type RouteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RouteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RouteCountAggregateInputType | true
    }

  export interface RouteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Route'], meta: { name: 'Route' } }
    /**
     * Find zero or one Route that matches the filter.
     * @param {RouteFindUniqueArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RouteFindUniqueArgs>(args: SelectSubset<T, RouteFindUniqueArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Route that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RouteFindUniqueOrThrowArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RouteFindUniqueOrThrowArgs>(args: SelectSubset<T, RouteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Route that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindFirstArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RouteFindFirstArgs>(args?: SelectSubset<T, RouteFindFirstArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Route that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindFirstOrThrowArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RouteFindFirstOrThrowArgs>(args?: SelectSubset<T, RouteFindFirstOrThrowArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Routes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Routes
     * const routes = await prisma.route.findMany()
     * 
     * // Get first 10 Routes
     * const routes = await prisma.route.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routeWithIdOnly = await prisma.route.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RouteFindManyArgs>(args?: SelectSubset<T, RouteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Route.
     * @param {RouteCreateArgs} args - Arguments to create a Route.
     * @example
     * // Create one Route
     * const Route = await prisma.route.create({
     *   data: {
     *     // ... data to create a Route
     *   }
     * })
     * 
     */
    create<T extends RouteCreateArgs>(args: SelectSubset<T, RouteCreateArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Routes.
     * @param {RouteCreateManyArgs} args - Arguments to create many Routes.
     * @example
     * // Create many Routes
     * const route = await prisma.route.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RouteCreateManyArgs>(args?: SelectSubset<T, RouteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Routes and returns the data saved in the database.
     * @param {RouteCreateManyAndReturnArgs} args - Arguments to create many Routes.
     * @example
     * // Create many Routes
     * const route = await prisma.route.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Routes and only return the `id`
     * const routeWithIdOnly = await prisma.route.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RouteCreateManyAndReturnArgs>(args?: SelectSubset<T, RouteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Route.
     * @param {RouteDeleteArgs} args - Arguments to delete one Route.
     * @example
     * // Delete one Route
     * const Route = await prisma.route.delete({
     *   where: {
     *     // ... filter to delete one Route
     *   }
     * })
     * 
     */
    delete<T extends RouteDeleteArgs>(args: SelectSubset<T, RouteDeleteArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Route.
     * @param {RouteUpdateArgs} args - Arguments to update one Route.
     * @example
     * // Update one Route
     * const route = await prisma.route.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RouteUpdateArgs>(args: SelectSubset<T, RouteUpdateArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Routes.
     * @param {RouteDeleteManyArgs} args - Arguments to filter Routes to delete.
     * @example
     * // Delete a few Routes
     * const { count } = await prisma.route.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RouteDeleteManyArgs>(args?: SelectSubset<T, RouteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Routes
     * const route = await prisma.route.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RouteUpdateManyArgs>(args: SelectSubset<T, RouteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routes and returns the data updated in the database.
     * @param {RouteUpdateManyAndReturnArgs} args - Arguments to update many Routes.
     * @example
     * // Update many Routes
     * const route = await prisma.route.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Routes and only return the `id`
     * const routeWithIdOnly = await prisma.route.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RouteUpdateManyAndReturnArgs>(args: SelectSubset<T, RouteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Route.
     * @param {RouteUpsertArgs} args - Arguments to update or create a Route.
     * @example
     * // Update or create a Route
     * const route = await prisma.route.upsert({
     *   create: {
     *     // ... data to create a Route
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Route we want to update
     *   }
     * })
     */
    upsert<T extends RouteUpsertArgs>(args: SelectSubset<T, RouteUpsertArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteCountArgs} args - Arguments to filter Routes to count.
     * @example
     * // Count the number of Routes
     * const count = await prisma.route.count({
     *   where: {
     *     // ... the filter for the Routes we want to count
     *   }
     * })
    **/
    count<T extends RouteCountArgs>(
      args?: Subset<T, RouteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RouteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Route.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RouteAggregateArgs>(args: Subset<T, RouteAggregateArgs>): Prisma.PrismaPromise<GetRouteAggregateType<T>>

    /**
     * Group by Route.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RouteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RouteGroupByArgs['orderBy'] }
        : { orderBy?: RouteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RouteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRouteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Route model
   */
  readonly fields: RouteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Route.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RouteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    drone<T extends Route$droneArgs<ExtArgs> = {}>(args?: Subset<T, Route$droneArgs<ExtArgs>>): Prisma__DroneClient<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    flights<T extends Route$flightsArgs<ExtArgs> = {}>(args?: Subset<T, Route$flightsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlightHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Route model
   */
  interface RouteFieldRefs {
    readonly id: FieldRef<"Route", 'Int'>
    readonly name: FieldRef<"Route", 'String'>
    readonly description: FieldRef<"Route", 'String'>
    readonly coordinates: FieldRef<"Route", 'Json'>
    readonly createdBy: FieldRef<"Route", 'Int'>
    readonly droneId: FieldRef<"Route", 'Int'>
    readonly createdAt: FieldRef<"Route", 'DateTime'>
    readonly updatedAt: FieldRef<"Route", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Route findUnique
   */
  export type RouteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route findUniqueOrThrow
   */
  export type RouteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route findFirst
   */
  export type RouteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route findFirstOrThrow
   */
  export type RouteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route findMany
   */
  export type RouteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Routes to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route create
   */
  export type RouteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The data needed to create a Route.
     */
    data: XOR<RouteCreateInput, RouteUncheckedCreateInput>
  }

  /**
   * Route createMany
   */
  export type RouteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Routes.
     */
    data: RouteCreateManyInput | RouteCreateManyInput[]
  }

  /**
   * Route createManyAndReturn
   */
  export type RouteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * The data used to create many Routes.
     */
    data: RouteCreateManyInput | RouteCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Route update
   */
  export type RouteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The data needed to update a Route.
     */
    data: XOR<RouteUpdateInput, RouteUncheckedUpdateInput>
    /**
     * Choose, which Route to update.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route updateMany
   */
  export type RouteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Routes.
     */
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyInput>
    /**
     * Filter which Routes to update
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to update.
     */
    limit?: number
  }

  /**
   * Route updateManyAndReturn
   */
  export type RouteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * The data used to update Routes.
     */
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyInput>
    /**
     * Filter which Routes to update
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Route upsert
   */
  export type RouteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The filter to search for the Route to update in case it exists.
     */
    where: RouteWhereUniqueInput
    /**
     * In case the Route found by the `where` argument doesn't exist, create a new Route with this data.
     */
    create: XOR<RouteCreateInput, RouteUncheckedCreateInput>
    /**
     * In case the Route was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RouteUpdateInput, RouteUncheckedUpdateInput>
  }

  /**
   * Route delete
   */
  export type RouteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter which Route to delete.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route deleteMany
   */
  export type RouteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Routes to delete
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to delete.
     */
    limit?: number
  }

  /**
   * Route.drone
   */
  export type Route$droneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInclude<ExtArgs> | null
    where?: DroneWhereInput
  }

  /**
   * Route.flights
   */
  export type Route$flightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightHistory
     */
    select?: FlightHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlightHistory
     */
    omit?: FlightHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightHistoryInclude<ExtArgs> | null
    where?: FlightHistoryWhereInput
    orderBy?: FlightHistoryOrderByWithRelationInput | FlightHistoryOrderByWithRelationInput[]
    cursor?: FlightHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlightHistoryScalarFieldEnum | FlightHistoryScalarFieldEnum[]
  }

  /**
   * Route without action
   */
  export type RouteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
  }


  /**
   * Model FlightHistory
   */

  export type AggregateFlightHistory = {
    _count: FlightHistoryCountAggregateOutputType | null
    _avg: FlightHistoryAvgAggregateOutputType | null
    _sum: FlightHistorySumAggregateOutputType | null
    _min: FlightHistoryMinAggregateOutputType | null
    _max: FlightHistoryMaxAggregateOutputType | null
  }

  export type FlightHistoryAvgAggregateOutputType = {
    id: number | null
    droneId: number | null
    routeId: number | null
    pilotId: number | null
    distance: number | null
    maxAltitude: number | null
    maxSpeed: number | null
  }

  export type FlightHistorySumAggregateOutputType = {
    id: number | null
    droneId: number | null
    routeId: number | null
    pilotId: number | null
    distance: number | null
    maxAltitude: number | null
    maxSpeed: number | null
  }

  export type FlightHistoryMinAggregateOutputType = {
    id: number | null
    droneId: number | null
    routeId: number | null
    pilotId: number | null
    startTime: Date | null
    endTime: Date | null
    distance: number | null
    maxAltitude: number | null
    maxSpeed: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FlightHistoryMaxAggregateOutputType = {
    id: number | null
    droneId: number | null
    routeId: number | null
    pilotId: number | null
    startTime: Date | null
    endTime: Date | null
    distance: number | null
    maxAltitude: number | null
    maxSpeed: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FlightHistoryCountAggregateOutputType = {
    id: number
    droneId: number
    routeId: number
    pilotId: number
    startTime: number
    endTime: number
    distance: number
    maxAltitude: number
    maxSpeed: number
    telemetry: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FlightHistoryAvgAggregateInputType = {
    id?: true
    droneId?: true
    routeId?: true
    pilotId?: true
    distance?: true
    maxAltitude?: true
    maxSpeed?: true
  }

  export type FlightHistorySumAggregateInputType = {
    id?: true
    droneId?: true
    routeId?: true
    pilotId?: true
    distance?: true
    maxAltitude?: true
    maxSpeed?: true
  }

  export type FlightHistoryMinAggregateInputType = {
    id?: true
    droneId?: true
    routeId?: true
    pilotId?: true
    startTime?: true
    endTime?: true
    distance?: true
    maxAltitude?: true
    maxSpeed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FlightHistoryMaxAggregateInputType = {
    id?: true
    droneId?: true
    routeId?: true
    pilotId?: true
    startTime?: true
    endTime?: true
    distance?: true
    maxAltitude?: true
    maxSpeed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FlightHistoryCountAggregateInputType = {
    id?: true
    droneId?: true
    routeId?: true
    pilotId?: true
    startTime?: true
    endTime?: true
    distance?: true
    maxAltitude?: true
    maxSpeed?: true
    telemetry?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FlightHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlightHistory to aggregate.
     */
    where?: FlightHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlightHistories to fetch.
     */
    orderBy?: FlightHistoryOrderByWithRelationInput | FlightHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlightHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlightHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlightHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FlightHistories
    **/
    _count?: true | FlightHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlightHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlightHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlightHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlightHistoryMaxAggregateInputType
  }

  export type GetFlightHistoryAggregateType<T extends FlightHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateFlightHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlightHistory[P]>
      : GetScalarType<T[P], AggregateFlightHistory[P]>
  }




  export type FlightHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlightHistoryWhereInput
    orderBy?: FlightHistoryOrderByWithAggregationInput | FlightHistoryOrderByWithAggregationInput[]
    by: FlightHistoryScalarFieldEnum[] | FlightHistoryScalarFieldEnum
    having?: FlightHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlightHistoryCountAggregateInputType | true
    _avg?: FlightHistoryAvgAggregateInputType
    _sum?: FlightHistorySumAggregateInputType
    _min?: FlightHistoryMinAggregateInputType
    _max?: FlightHistoryMaxAggregateInputType
  }

  export type FlightHistoryGroupByOutputType = {
    id: number
    droneId: number
    routeId: number | null
    pilotId: number
    startTime: Date
    endTime: Date | null
    distance: number | null
    maxAltitude: number | null
    maxSpeed: number | null
    telemetry: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: FlightHistoryCountAggregateOutputType | null
    _avg: FlightHistoryAvgAggregateOutputType | null
    _sum: FlightHistorySumAggregateOutputType | null
    _min: FlightHistoryMinAggregateOutputType | null
    _max: FlightHistoryMaxAggregateOutputType | null
  }

  type GetFlightHistoryGroupByPayload<T extends FlightHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlightHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlightHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlightHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], FlightHistoryGroupByOutputType[P]>
        }
      >
    >


  export type FlightHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    droneId?: boolean
    routeId?: boolean
    pilotId?: boolean
    startTime?: boolean
    endTime?: boolean
    distance?: boolean
    maxAltitude?: boolean
    maxSpeed?: boolean
    telemetry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    drone?: boolean | DroneDefaultArgs<ExtArgs>
    route?: boolean | FlightHistory$routeArgs<ExtArgs>
    pilot?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flightHistory"]>

  export type FlightHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    droneId?: boolean
    routeId?: boolean
    pilotId?: boolean
    startTime?: boolean
    endTime?: boolean
    distance?: boolean
    maxAltitude?: boolean
    maxSpeed?: boolean
    telemetry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    drone?: boolean | DroneDefaultArgs<ExtArgs>
    route?: boolean | FlightHistory$routeArgs<ExtArgs>
    pilot?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flightHistory"]>

  export type FlightHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    droneId?: boolean
    routeId?: boolean
    pilotId?: boolean
    startTime?: boolean
    endTime?: boolean
    distance?: boolean
    maxAltitude?: boolean
    maxSpeed?: boolean
    telemetry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    drone?: boolean | DroneDefaultArgs<ExtArgs>
    route?: boolean | FlightHistory$routeArgs<ExtArgs>
    pilot?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flightHistory"]>

  export type FlightHistorySelectScalar = {
    id?: boolean
    droneId?: boolean
    routeId?: boolean
    pilotId?: boolean
    startTime?: boolean
    endTime?: boolean
    distance?: boolean
    maxAltitude?: boolean
    maxSpeed?: boolean
    telemetry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FlightHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "droneId" | "routeId" | "pilotId" | "startTime" | "endTime" | "distance" | "maxAltitude" | "maxSpeed" | "telemetry" | "createdAt" | "updatedAt", ExtArgs["result"]["flightHistory"]>
  export type FlightHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drone?: boolean | DroneDefaultArgs<ExtArgs>
    route?: boolean | FlightHistory$routeArgs<ExtArgs>
    pilot?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FlightHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drone?: boolean | DroneDefaultArgs<ExtArgs>
    route?: boolean | FlightHistory$routeArgs<ExtArgs>
    pilot?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FlightHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drone?: boolean | DroneDefaultArgs<ExtArgs>
    route?: boolean | FlightHistory$routeArgs<ExtArgs>
    pilot?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FlightHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FlightHistory"
    objects: {
      drone: Prisma.$DronePayload<ExtArgs>
      route: Prisma.$RoutePayload<ExtArgs> | null
      pilot: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      droneId: number
      routeId: number | null
      pilotId: number
      startTime: Date
      endTime: Date | null
      distance: number | null
      maxAltitude: number | null
      maxSpeed: number | null
      telemetry: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["flightHistory"]>
    composites: {}
  }

  type FlightHistoryGetPayload<S extends boolean | null | undefined | FlightHistoryDefaultArgs> = $Result.GetResult<Prisma.$FlightHistoryPayload, S>

  type FlightHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlightHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlightHistoryCountAggregateInputType | true
    }

  export interface FlightHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FlightHistory'], meta: { name: 'FlightHistory' } }
    /**
     * Find zero or one FlightHistory that matches the filter.
     * @param {FlightHistoryFindUniqueArgs} args - Arguments to find a FlightHistory
     * @example
     * // Get one FlightHistory
     * const flightHistory = await prisma.flightHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlightHistoryFindUniqueArgs>(args: SelectSubset<T, FlightHistoryFindUniqueArgs<ExtArgs>>): Prisma__FlightHistoryClient<$Result.GetResult<Prisma.$FlightHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FlightHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlightHistoryFindUniqueOrThrowArgs} args - Arguments to find a FlightHistory
     * @example
     * // Get one FlightHistory
     * const flightHistory = await prisma.flightHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlightHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, FlightHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlightHistoryClient<$Result.GetResult<Prisma.$FlightHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlightHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightHistoryFindFirstArgs} args - Arguments to find a FlightHistory
     * @example
     * // Get one FlightHistory
     * const flightHistory = await prisma.flightHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlightHistoryFindFirstArgs>(args?: SelectSubset<T, FlightHistoryFindFirstArgs<ExtArgs>>): Prisma__FlightHistoryClient<$Result.GetResult<Prisma.$FlightHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlightHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightHistoryFindFirstOrThrowArgs} args - Arguments to find a FlightHistory
     * @example
     * // Get one FlightHistory
     * const flightHistory = await prisma.flightHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlightHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, FlightHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlightHistoryClient<$Result.GetResult<Prisma.$FlightHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FlightHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FlightHistories
     * const flightHistories = await prisma.flightHistory.findMany()
     * 
     * // Get first 10 FlightHistories
     * const flightHistories = await prisma.flightHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flightHistoryWithIdOnly = await prisma.flightHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlightHistoryFindManyArgs>(args?: SelectSubset<T, FlightHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlightHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FlightHistory.
     * @param {FlightHistoryCreateArgs} args - Arguments to create a FlightHistory.
     * @example
     * // Create one FlightHistory
     * const FlightHistory = await prisma.flightHistory.create({
     *   data: {
     *     // ... data to create a FlightHistory
     *   }
     * })
     * 
     */
    create<T extends FlightHistoryCreateArgs>(args: SelectSubset<T, FlightHistoryCreateArgs<ExtArgs>>): Prisma__FlightHistoryClient<$Result.GetResult<Prisma.$FlightHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FlightHistories.
     * @param {FlightHistoryCreateManyArgs} args - Arguments to create many FlightHistories.
     * @example
     * // Create many FlightHistories
     * const flightHistory = await prisma.flightHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlightHistoryCreateManyArgs>(args?: SelectSubset<T, FlightHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FlightHistories and returns the data saved in the database.
     * @param {FlightHistoryCreateManyAndReturnArgs} args - Arguments to create many FlightHistories.
     * @example
     * // Create many FlightHistories
     * const flightHistory = await prisma.flightHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FlightHistories and only return the `id`
     * const flightHistoryWithIdOnly = await prisma.flightHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FlightHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, FlightHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlightHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FlightHistory.
     * @param {FlightHistoryDeleteArgs} args - Arguments to delete one FlightHistory.
     * @example
     * // Delete one FlightHistory
     * const FlightHistory = await prisma.flightHistory.delete({
     *   where: {
     *     // ... filter to delete one FlightHistory
     *   }
     * })
     * 
     */
    delete<T extends FlightHistoryDeleteArgs>(args: SelectSubset<T, FlightHistoryDeleteArgs<ExtArgs>>): Prisma__FlightHistoryClient<$Result.GetResult<Prisma.$FlightHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FlightHistory.
     * @param {FlightHistoryUpdateArgs} args - Arguments to update one FlightHistory.
     * @example
     * // Update one FlightHistory
     * const flightHistory = await prisma.flightHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlightHistoryUpdateArgs>(args: SelectSubset<T, FlightHistoryUpdateArgs<ExtArgs>>): Prisma__FlightHistoryClient<$Result.GetResult<Prisma.$FlightHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FlightHistories.
     * @param {FlightHistoryDeleteManyArgs} args - Arguments to filter FlightHistories to delete.
     * @example
     * // Delete a few FlightHistories
     * const { count } = await prisma.flightHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlightHistoryDeleteManyArgs>(args?: SelectSubset<T, FlightHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlightHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FlightHistories
     * const flightHistory = await prisma.flightHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlightHistoryUpdateManyArgs>(args: SelectSubset<T, FlightHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlightHistories and returns the data updated in the database.
     * @param {FlightHistoryUpdateManyAndReturnArgs} args - Arguments to update many FlightHistories.
     * @example
     * // Update many FlightHistories
     * const flightHistory = await prisma.flightHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FlightHistories and only return the `id`
     * const flightHistoryWithIdOnly = await prisma.flightHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FlightHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, FlightHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlightHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FlightHistory.
     * @param {FlightHistoryUpsertArgs} args - Arguments to update or create a FlightHistory.
     * @example
     * // Update or create a FlightHistory
     * const flightHistory = await prisma.flightHistory.upsert({
     *   create: {
     *     // ... data to create a FlightHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FlightHistory we want to update
     *   }
     * })
     */
    upsert<T extends FlightHistoryUpsertArgs>(args: SelectSubset<T, FlightHistoryUpsertArgs<ExtArgs>>): Prisma__FlightHistoryClient<$Result.GetResult<Prisma.$FlightHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FlightHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightHistoryCountArgs} args - Arguments to filter FlightHistories to count.
     * @example
     * // Count the number of FlightHistories
     * const count = await prisma.flightHistory.count({
     *   where: {
     *     // ... the filter for the FlightHistories we want to count
     *   }
     * })
    **/
    count<T extends FlightHistoryCountArgs>(
      args?: Subset<T, FlightHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlightHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FlightHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FlightHistoryAggregateArgs>(args: Subset<T, FlightHistoryAggregateArgs>): Prisma.PrismaPromise<GetFlightHistoryAggregateType<T>>

    /**
     * Group by FlightHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FlightHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlightHistoryGroupByArgs['orderBy'] }
        : { orderBy?: FlightHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FlightHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlightHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FlightHistory model
   */
  readonly fields: FlightHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FlightHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlightHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    drone<T extends DroneDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DroneDefaultArgs<ExtArgs>>): Prisma__DroneClient<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    route<T extends FlightHistory$routeArgs<ExtArgs> = {}>(args?: Subset<T, FlightHistory$routeArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pilot<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FlightHistory model
   */
  interface FlightHistoryFieldRefs {
    readonly id: FieldRef<"FlightHistory", 'Int'>
    readonly droneId: FieldRef<"FlightHistory", 'Int'>
    readonly routeId: FieldRef<"FlightHistory", 'Int'>
    readonly pilotId: FieldRef<"FlightHistory", 'Int'>
    readonly startTime: FieldRef<"FlightHistory", 'DateTime'>
    readonly endTime: FieldRef<"FlightHistory", 'DateTime'>
    readonly distance: FieldRef<"FlightHistory", 'Float'>
    readonly maxAltitude: FieldRef<"FlightHistory", 'Float'>
    readonly maxSpeed: FieldRef<"FlightHistory", 'Float'>
    readonly telemetry: FieldRef<"FlightHistory", 'Json'>
    readonly createdAt: FieldRef<"FlightHistory", 'DateTime'>
    readonly updatedAt: FieldRef<"FlightHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FlightHistory findUnique
   */
  export type FlightHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightHistory
     */
    select?: FlightHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlightHistory
     */
    omit?: FlightHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightHistoryInclude<ExtArgs> | null
    /**
     * Filter, which FlightHistory to fetch.
     */
    where: FlightHistoryWhereUniqueInput
  }

  /**
   * FlightHistory findUniqueOrThrow
   */
  export type FlightHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightHistory
     */
    select?: FlightHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlightHistory
     */
    omit?: FlightHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightHistoryInclude<ExtArgs> | null
    /**
     * Filter, which FlightHistory to fetch.
     */
    where: FlightHistoryWhereUniqueInput
  }

  /**
   * FlightHistory findFirst
   */
  export type FlightHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightHistory
     */
    select?: FlightHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlightHistory
     */
    omit?: FlightHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightHistoryInclude<ExtArgs> | null
    /**
     * Filter, which FlightHistory to fetch.
     */
    where?: FlightHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlightHistories to fetch.
     */
    orderBy?: FlightHistoryOrderByWithRelationInput | FlightHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlightHistories.
     */
    cursor?: FlightHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlightHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlightHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlightHistories.
     */
    distinct?: FlightHistoryScalarFieldEnum | FlightHistoryScalarFieldEnum[]
  }

  /**
   * FlightHistory findFirstOrThrow
   */
  export type FlightHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightHistory
     */
    select?: FlightHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlightHistory
     */
    omit?: FlightHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightHistoryInclude<ExtArgs> | null
    /**
     * Filter, which FlightHistory to fetch.
     */
    where?: FlightHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlightHistories to fetch.
     */
    orderBy?: FlightHistoryOrderByWithRelationInput | FlightHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlightHistories.
     */
    cursor?: FlightHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlightHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlightHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlightHistories.
     */
    distinct?: FlightHistoryScalarFieldEnum | FlightHistoryScalarFieldEnum[]
  }

  /**
   * FlightHistory findMany
   */
  export type FlightHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightHistory
     */
    select?: FlightHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlightHistory
     */
    omit?: FlightHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightHistoryInclude<ExtArgs> | null
    /**
     * Filter, which FlightHistories to fetch.
     */
    where?: FlightHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlightHistories to fetch.
     */
    orderBy?: FlightHistoryOrderByWithRelationInput | FlightHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FlightHistories.
     */
    cursor?: FlightHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlightHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlightHistories.
     */
    skip?: number
    distinct?: FlightHistoryScalarFieldEnum | FlightHistoryScalarFieldEnum[]
  }

  /**
   * FlightHistory create
   */
  export type FlightHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightHistory
     */
    select?: FlightHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlightHistory
     */
    omit?: FlightHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a FlightHistory.
     */
    data: XOR<FlightHistoryCreateInput, FlightHistoryUncheckedCreateInput>
  }

  /**
   * FlightHistory createMany
   */
  export type FlightHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FlightHistories.
     */
    data: FlightHistoryCreateManyInput | FlightHistoryCreateManyInput[]
  }

  /**
   * FlightHistory createManyAndReturn
   */
  export type FlightHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightHistory
     */
    select?: FlightHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlightHistory
     */
    omit?: FlightHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many FlightHistories.
     */
    data: FlightHistoryCreateManyInput | FlightHistoryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FlightHistory update
   */
  export type FlightHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightHistory
     */
    select?: FlightHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlightHistory
     */
    omit?: FlightHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a FlightHistory.
     */
    data: XOR<FlightHistoryUpdateInput, FlightHistoryUncheckedUpdateInput>
    /**
     * Choose, which FlightHistory to update.
     */
    where: FlightHistoryWhereUniqueInput
  }

  /**
   * FlightHistory updateMany
   */
  export type FlightHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FlightHistories.
     */
    data: XOR<FlightHistoryUpdateManyMutationInput, FlightHistoryUncheckedUpdateManyInput>
    /**
     * Filter which FlightHistories to update
     */
    where?: FlightHistoryWhereInput
    /**
     * Limit how many FlightHistories to update.
     */
    limit?: number
  }

  /**
   * FlightHistory updateManyAndReturn
   */
  export type FlightHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightHistory
     */
    select?: FlightHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlightHistory
     */
    omit?: FlightHistoryOmit<ExtArgs> | null
    /**
     * The data used to update FlightHistories.
     */
    data: XOR<FlightHistoryUpdateManyMutationInput, FlightHistoryUncheckedUpdateManyInput>
    /**
     * Filter which FlightHistories to update
     */
    where?: FlightHistoryWhereInput
    /**
     * Limit how many FlightHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FlightHistory upsert
   */
  export type FlightHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightHistory
     */
    select?: FlightHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlightHistory
     */
    omit?: FlightHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the FlightHistory to update in case it exists.
     */
    where: FlightHistoryWhereUniqueInput
    /**
     * In case the FlightHistory found by the `where` argument doesn't exist, create a new FlightHistory with this data.
     */
    create: XOR<FlightHistoryCreateInput, FlightHistoryUncheckedCreateInput>
    /**
     * In case the FlightHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlightHistoryUpdateInput, FlightHistoryUncheckedUpdateInput>
  }

  /**
   * FlightHistory delete
   */
  export type FlightHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightHistory
     */
    select?: FlightHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlightHistory
     */
    omit?: FlightHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightHistoryInclude<ExtArgs> | null
    /**
     * Filter which FlightHistory to delete.
     */
    where: FlightHistoryWhereUniqueInput
  }

  /**
   * FlightHistory deleteMany
   */
  export type FlightHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlightHistories to delete
     */
    where?: FlightHistoryWhereInput
    /**
     * Limit how many FlightHistories to delete.
     */
    limit?: number
  }

  /**
   * FlightHistory.route
   */
  export type FlightHistory$routeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    where?: RouteWhereInput
  }

  /**
   * FlightHistory without action
   */
  export type FlightHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightHistory
     */
    select?: FlightHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlightHistory
     */
    omit?: FlightHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    id: number | null
    droneId: number | null
    userId: number | null
  }

  export type EventSumAggregateOutputType = {
    id: number | null
    droneId: number | null
    userId: number | null
  }

  export type EventMinAggregateOutputType = {
    id: number | null
    type: $Enums.EventType | null
    message: string | null
    severity: $Enums.Severity | null
    read: boolean | null
    droneId: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: number | null
    type: $Enums.EventType | null
    message: string | null
    severity: $Enums.Severity | null
    read: boolean | null
    droneId: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    type: number
    message: number
    severity: number
    read: number
    droneId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    id?: true
    droneId?: true
    userId?: true
  }

  export type EventSumAggregateInputType = {
    id?: true
    droneId?: true
    userId?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    type?: true
    message?: true
    severity?: true
    read?: true
    droneId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    type?: true
    message?: true
    severity?: true
    read?: true
    droneId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    type?: true
    message?: true
    severity?: true
    read?: true
    droneId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: number
    type: $Enums.EventType
    message: string
    severity: $Enums.Severity
    read: boolean
    droneId: number | null
    userId: number | null
    createdAt: Date
    updatedAt: Date
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    message?: boolean
    severity?: boolean
    read?: boolean
    droneId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    drone?: boolean | Event$droneArgs<ExtArgs>
    user?: boolean | Event$userArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    message?: boolean
    severity?: boolean
    read?: boolean
    droneId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    drone?: boolean | Event$droneArgs<ExtArgs>
    user?: boolean | Event$userArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    message?: boolean
    severity?: boolean
    read?: boolean
    droneId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    drone?: boolean | Event$droneArgs<ExtArgs>
    user?: boolean | Event$userArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    type?: boolean
    message?: boolean
    severity?: boolean
    read?: boolean
    droneId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "message" | "severity" | "read" | "droneId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drone?: boolean | Event$droneArgs<ExtArgs>
    user?: boolean | Event$userArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drone?: boolean | Event$droneArgs<ExtArgs>
    user?: boolean | Event$userArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drone?: boolean | Event$droneArgs<ExtArgs>
    user?: boolean | Event$userArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      drone: Prisma.$DronePayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: $Enums.EventType
      message: string
      severity: $Enums.Severity
      read: boolean
      droneId: number | null
      userId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    drone<T extends Event$droneArgs<ExtArgs> = {}>(args?: Subset<T, Event$droneArgs<ExtArgs>>): Prisma__DroneClient<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends Event$userArgs<ExtArgs> = {}>(args?: Subset<T, Event$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'Int'>
    readonly type: FieldRef<"Event", 'EventType'>
    readonly message: FieldRef<"Event", 'String'>
    readonly severity: FieldRef<"Event", 'Severity'>
    readonly read: FieldRef<"Event", 'Boolean'>
    readonly droneId: FieldRef<"Event", 'Int'>
    readonly userId: FieldRef<"Event", 'Int'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.drone
   */
  export type Event$droneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInclude<ExtArgs> | null
    where?: DroneWhereInput
  }

  /**
   * Event.user
   */
  export type Event$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model Detection
   */

  export type AggregateDetection = {
    _count: DetectionCountAggregateOutputType | null
    _avg: DetectionAvgAggregateOutputType | null
    _sum: DetectionSumAggregateOutputType | null
    _min: DetectionMinAggregateOutputType | null
    _max: DetectionMaxAggregateOutputType | null
  }

  export type DetectionAvgAggregateOutputType = {
    id: number | null
    droneId: number | null
    confidence: number | null
  }

  export type DetectionSumAggregateOutputType = {
    id: number | null
    droneId: number | null
    confidence: number | null
  }

  export type DetectionMinAggregateOutputType = {
    id: number | null
    droneId: number | null
    objectType: string | null
    confidence: number | null
    timestamp: Date | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DetectionMaxAggregateOutputType = {
    id: number | null
    droneId: number | null
    objectType: string | null
    confidence: number | null
    timestamp: Date | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DetectionCountAggregateOutputType = {
    id: number
    droneId: number
    objectType: number
    confidence: number
    coordinates: number
    timestamp: number
    imageUrl: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DetectionAvgAggregateInputType = {
    id?: true
    droneId?: true
    confidence?: true
  }

  export type DetectionSumAggregateInputType = {
    id?: true
    droneId?: true
    confidence?: true
  }

  export type DetectionMinAggregateInputType = {
    id?: true
    droneId?: true
    objectType?: true
    confidence?: true
    timestamp?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DetectionMaxAggregateInputType = {
    id?: true
    droneId?: true
    objectType?: true
    confidence?: true
    timestamp?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DetectionCountAggregateInputType = {
    id?: true
    droneId?: true
    objectType?: true
    confidence?: true
    coordinates?: true
    timestamp?: true
    imageUrl?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DetectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Detection to aggregate.
     */
    where?: DetectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detections to fetch.
     */
    orderBy?: DetectionOrderByWithRelationInput | DetectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DetectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Detections
    **/
    _count?: true | DetectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DetectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DetectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetectionMaxAggregateInputType
  }

  export type GetDetectionAggregateType<T extends DetectionAggregateArgs> = {
        [P in keyof T & keyof AggregateDetection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetection[P]>
      : GetScalarType<T[P], AggregateDetection[P]>
  }




  export type DetectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetectionWhereInput
    orderBy?: DetectionOrderByWithAggregationInput | DetectionOrderByWithAggregationInput[]
    by: DetectionScalarFieldEnum[] | DetectionScalarFieldEnum
    having?: DetectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetectionCountAggregateInputType | true
    _avg?: DetectionAvgAggregateInputType
    _sum?: DetectionSumAggregateInputType
    _min?: DetectionMinAggregateInputType
    _max?: DetectionMaxAggregateInputType
  }

  export type DetectionGroupByOutputType = {
    id: number
    droneId: number
    objectType: string
    confidence: number
    coordinates: JsonValue
    timestamp: Date
    imageUrl: string | null
    metadata: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: DetectionCountAggregateOutputType | null
    _avg: DetectionAvgAggregateOutputType | null
    _sum: DetectionSumAggregateOutputType | null
    _min: DetectionMinAggregateOutputType | null
    _max: DetectionMaxAggregateOutputType | null
  }

  type GetDetectionGroupByPayload<T extends DetectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetectionGroupByOutputType[P]>
            : GetScalarType<T[P], DetectionGroupByOutputType[P]>
        }
      >
    >


  export type DetectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    droneId?: boolean
    objectType?: boolean
    confidence?: boolean
    coordinates?: boolean
    timestamp?: boolean
    imageUrl?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    drone?: boolean | DroneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detection"]>

  export type DetectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    droneId?: boolean
    objectType?: boolean
    confidence?: boolean
    coordinates?: boolean
    timestamp?: boolean
    imageUrl?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    drone?: boolean | DroneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detection"]>

  export type DetectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    droneId?: boolean
    objectType?: boolean
    confidence?: boolean
    coordinates?: boolean
    timestamp?: boolean
    imageUrl?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    drone?: boolean | DroneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detection"]>

  export type DetectionSelectScalar = {
    id?: boolean
    droneId?: boolean
    objectType?: boolean
    confidence?: boolean
    coordinates?: boolean
    timestamp?: boolean
    imageUrl?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DetectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "droneId" | "objectType" | "confidence" | "coordinates" | "timestamp" | "imageUrl" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["detection"]>
  export type DetectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drone?: boolean | DroneDefaultArgs<ExtArgs>
  }
  export type DetectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drone?: boolean | DroneDefaultArgs<ExtArgs>
  }
  export type DetectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drone?: boolean | DroneDefaultArgs<ExtArgs>
  }

  export type $DetectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Detection"
    objects: {
      drone: Prisma.$DronePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      droneId: number
      objectType: string
      confidence: number
      coordinates: Prisma.JsonValue
      timestamp: Date
      imageUrl: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["detection"]>
    composites: {}
  }

  type DetectionGetPayload<S extends boolean | null | undefined | DetectionDefaultArgs> = $Result.GetResult<Prisma.$DetectionPayload, S>

  type DetectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DetectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetectionCountAggregateInputType | true
    }

  export interface DetectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Detection'], meta: { name: 'Detection' } }
    /**
     * Find zero or one Detection that matches the filter.
     * @param {DetectionFindUniqueArgs} args - Arguments to find a Detection
     * @example
     * // Get one Detection
     * const detection = await prisma.detection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DetectionFindUniqueArgs>(args: SelectSubset<T, DetectionFindUniqueArgs<ExtArgs>>): Prisma__DetectionClient<$Result.GetResult<Prisma.$DetectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Detection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DetectionFindUniqueOrThrowArgs} args - Arguments to find a Detection
     * @example
     * // Get one Detection
     * const detection = await prisma.detection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DetectionFindUniqueOrThrowArgs>(args: SelectSubset<T, DetectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DetectionClient<$Result.GetResult<Prisma.$DetectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetectionFindFirstArgs} args - Arguments to find a Detection
     * @example
     * // Get one Detection
     * const detection = await prisma.detection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DetectionFindFirstArgs>(args?: SelectSubset<T, DetectionFindFirstArgs<ExtArgs>>): Prisma__DetectionClient<$Result.GetResult<Prisma.$DetectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetectionFindFirstOrThrowArgs} args - Arguments to find a Detection
     * @example
     * // Get one Detection
     * const detection = await prisma.detection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DetectionFindFirstOrThrowArgs>(args?: SelectSubset<T, DetectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DetectionClient<$Result.GetResult<Prisma.$DetectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Detections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Detections
     * const detections = await prisma.detection.findMany()
     * 
     * // Get first 10 Detections
     * const detections = await prisma.detection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detectionWithIdOnly = await prisma.detection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DetectionFindManyArgs>(args?: SelectSubset<T, DetectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Detection.
     * @param {DetectionCreateArgs} args - Arguments to create a Detection.
     * @example
     * // Create one Detection
     * const Detection = await prisma.detection.create({
     *   data: {
     *     // ... data to create a Detection
     *   }
     * })
     * 
     */
    create<T extends DetectionCreateArgs>(args: SelectSubset<T, DetectionCreateArgs<ExtArgs>>): Prisma__DetectionClient<$Result.GetResult<Prisma.$DetectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Detections.
     * @param {DetectionCreateManyArgs} args - Arguments to create many Detections.
     * @example
     * // Create many Detections
     * const detection = await prisma.detection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DetectionCreateManyArgs>(args?: SelectSubset<T, DetectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Detections and returns the data saved in the database.
     * @param {DetectionCreateManyAndReturnArgs} args - Arguments to create many Detections.
     * @example
     * // Create many Detections
     * const detection = await prisma.detection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Detections and only return the `id`
     * const detectionWithIdOnly = await prisma.detection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DetectionCreateManyAndReturnArgs>(args?: SelectSubset<T, DetectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Detection.
     * @param {DetectionDeleteArgs} args - Arguments to delete one Detection.
     * @example
     * // Delete one Detection
     * const Detection = await prisma.detection.delete({
     *   where: {
     *     // ... filter to delete one Detection
     *   }
     * })
     * 
     */
    delete<T extends DetectionDeleteArgs>(args: SelectSubset<T, DetectionDeleteArgs<ExtArgs>>): Prisma__DetectionClient<$Result.GetResult<Prisma.$DetectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Detection.
     * @param {DetectionUpdateArgs} args - Arguments to update one Detection.
     * @example
     * // Update one Detection
     * const detection = await prisma.detection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DetectionUpdateArgs>(args: SelectSubset<T, DetectionUpdateArgs<ExtArgs>>): Prisma__DetectionClient<$Result.GetResult<Prisma.$DetectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Detections.
     * @param {DetectionDeleteManyArgs} args - Arguments to filter Detections to delete.
     * @example
     * // Delete a few Detections
     * const { count } = await prisma.detection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DetectionDeleteManyArgs>(args?: SelectSubset<T, DetectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Detections
     * const detection = await prisma.detection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DetectionUpdateManyArgs>(args: SelectSubset<T, DetectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detections and returns the data updated in the database.
     * @param {DetectionUpdateManyAndReturnArgs} args - Arguments to update many Detections.
     * @example
     * // Update many Detections
     * const detection = await prisma.detection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Detections and only return the `id`
     * const detectionWithIdOnly = await prisma.detection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DetectionUpdateManyAndReturnArgs>(args: SelectSubset<T, DetectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Detection.
     * @param {DetectionUpsertArgs} args - Arguments to update or create a Detection.
     * @example
     * // Update or create a Detection
     * const detection = await prisma.detection.upsert({
     *   create: {
     *     // ... data to create a Detection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Detection we want to update
     *   }
     * })
     */
    upsert<T extends DetectionUpsertArgs>(args: SelectSubset<T, DetectionUpsertArgs<ExtArgs>>): Prisma__DetectionClient<$Result.GetResult<Prisma.$DetectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Detections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetectionCountArgs} args - Arguments to filter Detections to count.
     * @example
     * // Count the number of Detections
     * const count = await prisma.detection.count({
     *   where: {
     *     // ... the filter for the Detections we want to count
     *   }
     * })
    **/
    count<T extends DetectionCountArgs>(
      args?: Subset<T, DetectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Detection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DetectionAggregateArgs>(args: Subset<T, DetectionAggregateArgs>): Prisma.PrismaPromise<GetDetectionAggregateType<T>>

    /**
     * Group by Detection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DetectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetectionGroupByArgs['orderBy'] }
        : { orderBy?: DetectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DetectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Detection model
   */
  readonly fields: DetectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Detection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DetectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    drone<T extends DroneDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DroneDefaultArgs<ExtArgs>>): Prisma__DroneClient<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Detection model
   */
  interface DetectionFieldRefs {
    readonly id: FieldRef<"Detection", 'Int'>
    readonly droneId: FieldRef<"Detection", 'Int'>
    readonly objectType: FieldRef<"Detection", 'String'>
    readonly confidence: FieldRef<"Detection", 'Float'>
    readonly coordinates: FieldRef<"Detection", 'Json'>
    readonly timestamp: FieldRef<"Detection", 'DateTime'>
    readonly imageUrl: FieldRef<"Detection", 'String'>
    readonly metadata: FieldRef<"Detection", 'Json'>
    readonly createdAt: FieldRef<"Detection", 'DateTime'>
    readonly updatedAt: FieldRef<"Detection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Detection findUnique
   */
  export type DetectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection
     */
    select?: DetectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection
     */
    omit?: DetectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionInclude<ExtArgs> | null
    /**
     * Filter, which Detection to fetch.
     */
    where: DetectionWhereUniqueInput
  }

  /**
   * Detection findUniqueOrThrow
   */
  export type DetectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection
     */
    select?: DetectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection
     */
    omit?: DetectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionInclude<ExtArgs> | null
    /**
     * Filter, which Detection to fetch.
     */
    where: DetectionWhereUniqueInput
  }

  /**
   * Detection findFirst
   */
  export type DetectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection
     */
    select?: DetectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection
     */
    omit?: DetectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionInclude<ExtArgs> | null
    /**
     * Filter, which Detection to fetch.
     */
    where?: DetectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detections to fetch.
     */
    orderBy?: DetectionOrderByWithRelationInput | DetectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Detections.
     */
    cursor?: DetectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Detections.
     */
    distinct?: DetectionScalarFieldEnum | DetectionScalarFieldEnum[]
  }

  /**
   * Detection findFirstOrThrow
   */
  export type DetectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection
     */
    select?: DetectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection
     */
    omit?: DetectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionInclude<ExtArgs> | null
    /**
     * Filter, which Detection to fetch.
     */
    where?: DetectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detections to fetch.
     */
    orderBy?: DetectionOrderByWithRelationInput | DetectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Detections.
     */
    cursor?: DetectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Detections.
     */
    distinct?: DetectionScalarFieldEnum | DetectionScalarFieldEnum[]
  }

  /**
   * Detection findMany
   */
  export type DetectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection
     */
    select?: DetectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection
     */
    omit?: DetectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionInclude<ExtArgs> | null
    /**
     * Filter, which Detections to fetch.
     */
    where?: DetectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detections to fetch.
     */
    orderBy?: DetectionOrderByWithRelationInput | DetectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Detections.
     */
    cursor?: DetectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detections.
     */
    skip?: number
    distinct?: DetectionScalarFieldEnum | DetectionScalarFieldEnum[]
  }

  /**
   * Detection create
   */
  export type DetectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection
     */
    select?: DetectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection
     */
    omit?: DetectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Detection.
     */
    data: XOR<DetectionCreateInput, DetectionUncheckedCreateInput>
  }

  /**
   * Detection createMany
   */
  export type DetectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Detections.
     */
    data: DetectionCreateManyInput | DetectionCreateManyInput[]
  }

  /**
   * Detection createManyAndReturn
   */
  export type DetectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection
     */
    select?: DetectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Detection
     */
    omit?: DetectionOmit<ExtArgs> | null
    /**
     * The data used to create many Detections.
     */
    data: DetectionCreateManyInput | DetectionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Detection update
   */
  export type DetectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection
     */
    select?: DetectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection
     */
    omit?: DetectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Detection.
     */
    data: XOR<DetectionUpdateInput, DetectionUncheckedUpdateInput>
    /**
     * Choose, which Detection to update.
     */
    where: DetectionWhereUniqueInput
  }

  /**
   * Detection updateMany
   */
  export type DetectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Detections.
     */
    data: XOR<DetectionUpdateManyMutationInput, DetectionUncheckedUpdateManyInput>
    /**
     * Filter which Detections to update
     */
    where?: DetectionWhereInput
    /**
     * Limit how many Detections to update.
     */
    limit?: number
  }

  /**
   * Detection updateManyAndReturn
   */
  export type DetectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection
     */
    select?: DetectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Detection
     */
    omit?: DetectionOmit<ExtArgs> | null
    /**
     * The data used to update Detections.
     */
    data: XOR<DetectionUpdateManyMutationInput, DetectionUncheckedUpdateManyInput>
    /**
     * Filter which Detections to update
     */
    where?: DetectionWhereInput
    /**
     * Limit how many Detections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Detection upsert
   */
  export type DetectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection
     */
    select?: DetectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection
     */
    omit?: DetectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Detection to update in case it exists.
     */
    where: DetectionWhereUniqueInput
    /**
     * In case the Detection found by the `where` argument doesn't exist, create a new Detection with this data.
     */
    create: XOR<DetectionCreateInput, DetectionUncheckedCreateInput>
    /**
     * In case the Detection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DetectionUpdateInput, DetectionUncheckedUpdateInput>
  }

  /**
   * Detection delete
   */
  export type DetectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection
     */
    select?: DetectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection
     */
    omit?: DetectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionInclude<ExtArgs> | null
    /**
     * Filter which Detection to delete.
     */
    where: DetectionWhereUniqueInput
  }

  /**
   * Detection deleteMany
   */
  export type DetectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Detections to delete
     */
    where?: DetectionWhereInput
    /**
     * Limit how many Detections to delete.
     */
    limit?: number
  }

  /**
   * Detection without action
   */
  export type DetectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection
     */
    select?: DetectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection
     */
    omit?: DetectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetectionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    passwordHash: 'passwordHash',
    fullName: 'fullName',
    roleId: 'roleId',
    isActive: 'isActive',
    lastLogin: 'lastLogin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DroneScalarFieldEnum: {
    id: 'id',
    name: 'name',
    model: 'model',
    serialNumber: 'serialNumber',
    status: 'status',
    batteryLevel: 'batteryLevel',
    latitude: 'latitude',
    longitude: 'longitude',
    altitude: 'altitude',
    speed: 'speed',
    ownerId: 'ownerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DroneScalarFieldEnum = (typeof DroneScalarFieldEnum)[keyof typeof DroneScalarFieldEnum]


  export const RouteScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    coordinates: 'coordinates',
    createdBy: 'createdBy',
    droneId: 'droneId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RouteScalarFieldEnum = (typeof RouteScalarFieldEnum)[keyof typeof RouteScalarFieldEnum]


  export const FlightHistoryScalarFieldEnum: {
    id: 'id',
    droneId: 'droneId',
    routeId: 'routeId',
    pilotId: 'pilotId',
    startTime: 'startTime',
    endTime: 'endTime',
    distance: 'distance',
    maxAltitude: 'maxAltitude',
    maxSpeed: 'maxSpeed',
    telemetry: 'telemetry',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FlightHistoryScalarFieldEnum = (typeof FlightHistoryScalarFieldEnum)[keyof typeof FlightHistoryScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    type: 'type',
    message: 'message',
    severity: 'severity',
    read: 'read',
    droneId: 'droneId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const DetectionScalarFieldEnum: {
    id: 'id',
    droneId: 'droneId',
    objectType: 'objectType',
    confidence: 'confidence',
    coordinates: 'coordinates',
    timestamp: 'timestamp',
    imageUrl: 'imageUrl',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DetectionScalarFieldEnum = (typeof DetectionScalarFieldEnum)[keyof typeof DetectionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DroneStatus'
   */
  export type EnumDroneStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DroneStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'EventType'
   */
  export type EnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventType'>
    


  /**
   * Reference to a field of type 'Severity'
   */
  export type EnumSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Severity'>
    
  /**
   * Deep Input Types
   */


  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    name?: StringFilter<"Role"> | string
    description?: StringNullableFilter<"Role"> | string | null
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    description?: StringNullableFilter<"Role"> | string | null
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    users?: UserListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    name?: StringWithAggregatesFilter<"Role"> | string
    description?: StringNullableWithAggregatesFilter<"Role"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    fullName?: StringNullableFilter<"User"> | string | null
    roleId?: IntFilter<"User"> | number
    isActive?: BoolFilter<"User"> | boolean
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    drones?: DroneListRelationFilter
    routes?: RouteListRelationFilter
    flightHistory?: FlightHistoryListRelationFilter
    events?: EventListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrderInput | SortOrder
    roleId?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: RoleOrderByWithRelationInput
    drones?: DroneOrderByRelationAggregateInput
    routes?: RouteOrderByRelationAggregateInput
    flightHistory?: FlightHistoryOrderByRelationAggregateInput
    events?: EventOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    fullName?: StringNullableFilter<"User"> | string | null
    roleId?: IntFilter<"User"> | number
    isActive?: BoolFilter<"User"> | boolean
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    drones?: DroneListRelationFilter
    routes?: RouteListRelationFilter
    flightHistory?: FlightHistoryListRelationFilter
    events?: EventListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrderInput | SortOrder
    roleId?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringNullableWithAggregatesFilter<"User"> | string | null
    roleId?: IntWithAggregatesFilter<"User"> | number
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    lastLogin?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DroneWhereInput = {
    AND?: DroneWhereInput | DroneWhereInput[]
    OR?: DroneWhereInput[]
    NOT?: DroneWhereInput | DroneWhereInput[]
    id?: IntFilter<"Drone"> | number
    name?: StringFilter<"Drone"> | string
    model?: StringFilter<"Drone"> | string
    serialNumber?: StringFilter<"Drone"> | string
    status?: EnumDroneStatusFilter<"Drone"> | $Enums.DroneStatus
    batteryLevel?: IntFilter<"Drone"> | number
    latitude?: FloatNullableFilter<"Drone"> | number | null
    longitude?: FloatNullableFilter<"Drone"> | number | null
    altitude?: FloatNullableFilter<"Drone"> | number | null
    speed?: FloatNullableFilter<"Drone"> | number | null
    ownerId?: IntFilter<"Drone"> | number
    createdAt?: DateTimeFilter<"Drone"> | Date | string
    updatedAt?: DateTimeFilter<"Drone"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    routes?: RouteListRelationFilter
    flightHistory?: FlightHistoryListRelationFilter
    events?: EventListRelationFilter
    detections?: DetectionListRelationFilter
  }

  export type DroneOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    model?: SortOrder
    serialNumber?: SortOrder
    status?: SortOrder
    batteryLevel?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    altitude?: SortOrderInput | SortOrder
    speed?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    routes?: RouteOrderByRelationAggregateInput
    flightHistory?: FlightHistoryOrderByRelationAggregateInput
    events?: EventOrderByRelationAggregateInput
    detections?: DetectionOrderByRelationAggregateInput
  }

  export type DroneWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    serialNumber?: string
    AND?: DroneWhereInput | DroneWhereInput[]
    OR?: DroneWhereInput[]
    NOT?: DroneWhereInput | DroneWhereInput[]
    name?: StringFilter<"Drone"> | string
    model?: StringFilter<"Drone"> | string
    status?: EnumDroneStatusFilter<"Drone"> | $Enums.DroneStatus
    batteryLevel?: IntFilter<"Drone"> | number
    latitude?: FloatNullableFilter<"Drone"> | number | null
    longitude?: FloatNullableFilter<"Drone"> | number | null
    altitude?: FloatNullableFilter<"Drone"> | number | null
    speed?: FloatNullableFilter<"Drone"> | number | null
    ownerId?: IntFilter<"Drone"> | number
    createdAt?: DateTimeFilter<"Drone"> | Date | string
    updatedAt?: DateTimeFilter<"Drone"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    routes?: RouteListRelationFilter
    flightHistory?: FlightHistoryListRelationFilter
    events?: EventListRelationFilter
    detections?: DetectionListRelationFilter
  }, "id" | "serialNumber">

  export type DroneOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    model?: SortOrder
    serialNumber?: SortOrder
    status?: SortOrder
    batteryLevel?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    altitude?: SortOrderInput | SortOrder
    speed?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DroneCountOrderByAggregateInput
    _avg?: DroneAvgOrderByAggregateInput
    _max?: DroneMaxOrderByAggregateInput
    _min?: DroneMinOrderByAggregateInput
    _sum?: DroneSumOrderByAggregateInput
  }

  export type DroneScalarWhereWithAggregatesInput = {
    AND?: DroneScalarWhereWithAggregatesInput | DroneScalarWhereWithAggregatesInput[]
    OR?: DroneScalarWhereWithAggregatesInput[]
    NOT?: DroneScalarWhereWithAggregatesInput | DroneScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Drone"> | number
    name?: StringWithAggregatesFilter<"Drone"> | string
    model?: StringWithAggregatesFilter<"Drone"> | string
    serialNumber?: StringWithAggregatesFilter<"Drone"> | string
    status?: EnumDroneStatusWithAggregatesFilter<"Drone"> | $Enums.DroneStatus
    batteryLevel?: IntWithAggregatesFilter<"Drone"> | number
    latitude?: FloatNullableWithAggregatesFilter<"Drone"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Drone"> | number | null
    altitude?: FloatNullableWithAggregatesFilter<"Drone"> | number | null
    speed?: FloatNullableWithAggregatesFilter<"Drone"> | number | null
    ownerId?: IntWithAggregatesFilter<"Drone"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Drone"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Drone"> | Date | string
  }

  export type RouteWhereInput = {
    AND?: RouteWhereInput | RouteWhereInput[]
    OR?: RouteWhereInput[]
    NOT?: RouteWhereInput | RouteWhereInput[]
    id?: IntFilter<"Route"> | number
    name?: StringFilter<"Route"> | string
    description?: StringNullableFilter<"Route"> | string | null
    coordinates?: JsonFilter<"Route">
    createdBy?: IntFilter<"Route"> | number
    droneId?: IntNullableFilter<"Route"> | number | null
    createdAt?: DateTimeFilter<"Route"> | Date | string
    updatedAt?: DateTimeFilter<"Route"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    drone?: XOR<DroneNullableScalarRelationFilter, DroneWhereInput> | null
    flights?: FlightHistoryListRelationFilter
  }

  export type RouteOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    coordinates?: SortOrder
    createdBy?: SortOrder
    droneId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    drone?: DroneOrderByWithRelationInput
    flights?: FlightHistoryOrderByRelationAggregateInput
  }

  export type RouteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RouteWhereInput | RouteWhereInput[]
    OR?: RouteWhereInput[]
    NOT?: RouteWhereInput | RouteWhereInput[]
    name?: StringFilter<"Route"> | string
    description?: StringNullableFilter<"Route"> | string | null
    coordinates?: JsonFilter<"Route">
    createdBy?: IntFilter<"Route"> | number
    droneId?: IntNullableFilter<"Route"> | number | null
    createdAt?: DateTimeFilter<"Route"> | Date | string
    updatedAt?: DateTimeFilter<"Route"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    drone?: XOR<DroneNullableScalarRelationFilter, DroneWhereInput> | null
    flights?: FlightHistoryListRelationFilter
  }, "id">

  export type RouteOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    coordinates?: SortOrder
    createdBy?: SortOrder
    droneId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RouteCountOrderByAggregateInput
    _avg?: RouteAvgOrderByAggregateInput
    _max?: RouteMaxOrderByAggregateInput
    _min?: RouteMinOrderByAggregateInput
    _sum?: RouteSumOrderByAggregateInput
  }

  export type RouteScalarWhereWithAggregatesInput = {
    AND?: RouteScalarWhereWithAggregatesInput | RouteScalarWhereWithAggregatesInput[]
    OR?: RouteScalarWhereWithAggregatesInput[]
    NOT?: RouteScalarWhereWithAggregatesInput | RouteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Route"> | number
    name?: StringWithAggregatesFilter<"Route"> | string
    description?: StringNullableWithAggregatesFilter<"Route"> | string | null
    coordinates?: JsonWithAggregatesFilter<"Route">
    createdBy?: IntWithAggregatesFilter<"Route"> | number
    droneId?: IntNullableWithAggregatesFilter<"Route"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Route"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Route"> | Date | string
  }

  export type FlightHistoryWhereInput = {
    AND?: FlightHistoryWhereInput | FlightHistoryWhereInput[]
    OR?: FlightHistoryWhereInput[]
    NOT?: FlightHistoryWhereInput | FlightHistoryWhereInput[]
    id?: IntFilter<"FlightHistory"> | number
    droneId?: IntFilter<"FlightHistory"> | number
    routeId?: IntNullableFilter<"FlightHistory"> | number | null
    pilotId?: IntFilter<"FlightHistory"> | number
    startTime?: DateTimeFilter<"FlightHistory"> | Date | string
    endTime?: DateTimeNullableFilter<"FlightHistory"> | Date | string | null
    distance?: FloatNullableFilter<"FlightHistory"> | number | null
    maxAltitude?: FloatNullableFilter<"FlightHistory"> | number | null
    maxSpeed?: FloatNullableFilter<"FlightHistory"> | number | null
    telemetry?: JsonNullableFilter<"FlightHistory">
    createdAt?: DateTimeFilter<"FlightHistory"> | Date | string
    updatedAt?: DateTimeFilter<"FlightHistory"> | Date | string
    drone?: XOR<DroneScalarRelationFilter, DroneWhereInput>
    route?: XOR<RouteNullableScalarRelationFilter, RouteWhereInput> | null
    pilot?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FlightHistoryOrderByWithRelationInput = {
    id?: SortOrder
    droneId?: SortOrder
    routeId?: SortOrderInput | SortOrder
    pilotId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    distance?: SortOrderInput | SortOrder
    maxAltitude?: SortOrderInput | SortOrder
    maxSpeed?: SortOrderInput | SortOrder
    telemetry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    drone?: DroneOrderByWithRelationInput
    route?: RouteOrderByWithRelationInput
    pilot?: UserOrderByWithRelationInput
  }

  export type FlightHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FlightHistoryWhereInput | FlightHistoryWhereInput[]
    OR?: FlightHistoryWhereInput[]
    NOT?: FlightHistoryWhereInput | FlightHistoryWhereInput[]
    droneId?: IntFilter<"FlightHistory"> | number
    routeId?: IntNullableFilter<"FlightHistory"> | number | null
    pilotId?: IntFilter<"FlightHistory"> | number
    startTime?: DateTimeFilter<"FlightHistory"> | Date | string
    endTime?: DateTimeNullableFilter<"FlightHistory"> | Date | string | null
    distance?: FloatNullableFilter<"FlightHistory"> | number | null
    maxAltitude?: FloatNullableFilter<"FlightHistory"> | number | null
    maxSpeed?: FloatNullableFilter<"FlightHistory"> | number | null
    telemetry?: JsonNullableFilter<"FlightHistory">
    createdAt?: DateTimeFilter<"FlightHistory"> | Date | string
    updatedAt?: DateTimeFilter<"FlightHistory"> | Date | string
    drone?: XOR<DroneScalarRelationFilter, DroneWhereInput>
    route?: XOR<RouteNullableScalarRelationFilter, RouteWhereInput> | null
    pilot?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type FlightHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    droneId?: SortOrder
    routeId?: SortOrderInput | SortOrder
    pilotId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    distance?: SortOrderInput | SortOrder
    maxAltitude?: SortOrderInput | SortOrder
    maxSpeed?: SortOrderInput | SortOrder
    telemetry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FlightHistoryCountOrderByAggregateInput
    _avg?: FlightHistoryAvgOrderByAggregateInput
    _max?: FlightHistoryMaxOrderByAggregateInput
    _min?: FlightHistoryMinOrderByAggregateInput
    _sum?: FlightHistorySumOrderByAggregateInput
  }

  export type FlightHistoryScalarWhereWithAggregatesInput = {
    AND?: FlightHistoryScalarWhereWithAggregatesInput | FlightHistoryScalarWhereWithAggregatesInput[]
    OR?: FlightHistoryScalarWhereWithAggregatesInput[]
    NOT?: FlightHistoryScalarWhereWithAggregatesInput | FlightHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FlightHistory"> | number
    droneId?: IntWithAggregatesFilter<"FlightHistory"> | number
    routeId?: IntNullableWithAggregatesFilter<"FlightHistory"> | number | null
    pilotId?: IntWithAggregatesFilter<"FlightHistory"> | number
    startTime?: DateTimeWithAggregatesFilter<"FlightHistory"> | Date | string
    endTime?: DateTimeNullableWithAggregatesFilter<"FlightHistory"> | Date | string | null
    distance?: FloatNullableWithAggregatesFilter<"FlightHistory"> | number | null
    maxAltitude?: FloatNullableWithAggregatesFilter<"FlightHistory"> | number | null
    maxSpeed?: FloatNullableWithAggregatesFilter<"FlightHistory"> | number | null
    telemetry?: JsonNullableWithAggregatesFilter<"FlightHistory">
    createdAt?: DateTimeWithAggregatesFilter<"FlightHistory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FlightHistory"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: IntFilter<"Event"> | number
    type?: EnumEventTypeFilter<"Event"> | $Enums.EventType
    message?: StringFilter<"Event"> | string
    severity?: EnumSeverityFilter<"Event"> | $Enums.Severity
    read?: BoolFilter<"Event"> | boolean
    droneId?: IntNullableFilter<"Event"> | number | null
    userId?: IntNullableFilter<"Event"> | number | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    drone?: XOR<DroneNullableScalarRelationFilter, DroneWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    severity?: SortOrder
    read?: SortOrder
    droneId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    drone?: DroneOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    type?: EnumEventTypeFilter<"Event"> | $Enums.EventType
    message?: StringFilter<"Event"> | string
    severity?: EnumSeverityFilter<"Event"> | $Enums.Severity
    read?: BoolFilter<"Event"> | boolean
    droneId?: IntNullableFilter<"Event"> | number | null
    userId?: IntNullableFilter<"Event"> | number | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    drone?: XOR<DroneNullableScalarRelationFilter, DroneWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    severity?: SortOrder
    read?: SortOrder
    droneId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Event"> | number
    type?: EnumEventTypeWithAggregatesFilter<"Event"> | $Enums.EventType
    message?: StringWithAggregatesFilter<"Event"> | string
    severity?: EnumSeverityWithAggregatesFilter<"Event"> | $Enums.Severity
    read?: BoolWithAggregatesFilter<"Event"> | boolean
    droneId?: IntNullableWithAggregatesFilter<"Event"> | number | null
    userId?: IntNullableWithAggregatesFilter<"Event"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type DetectionWhereInput = {
    AND?: DetectionWhereInput | DetectionWhereInput[]
    OR?: DetectionWhereInput[]
    NOT?: DetectionWhereInput | DetectionWhereInput[]
    id?: IntFilter<"Detection"> | number
    droneId?: IntFilter<"Detection"> | number
    objectType?: StringFilter<"Detection"> | string
    confidence?: FloatFilter<"Detection"> | number
    coordinates?: JsonFilter<"Detection">
    timestamp?: DateTimeFilter<"Detection"> | Date | string
    imageUrl?: StringNullableFilter<"Detection"> | string | null
    metadata?: JsonNullableFilter<"Detection">
    createdAt?: DateTimeFilter<"Detection"> | Date | string
    updatedAt?: DateTimeFilter<"Detection"> | Date | string
    drone?: XOR<DroneScalarRelationFilter, DroneWhereInput>
  }

  export type DetectionOrderByWithRelationInput = {
    id?: SortOrder
    droneId?: SortOrder
    objectType?: SortOrder
    confidence?: SortOrder
    coordinates?: SortOrder
    timestamp?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    drone?: DroneOrderByWithRelationInput
  }

  export type DetectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DetectionWhereInput | DetectionWhereInput[]
    OR?: DetectionWhereInput[]
    NOT?: DetectionWhereInput | DetectionWhereInput[]
    droneId?: IntFilter<"Detection"> | number
    objectType?: StringFilter<"Detection"> | string
    confidence?: FloatFilter<"Detection"> | number
    coordinates?: JsonFilter<"Detection">
    timestamp?: DateTimeFilter<"Detection"> | Date | string
    imageUrl?: StringNullableFilter<"Detection"> | string | null
    metadata?: JsonNullableFilter<"Detection">
    createdAt?: DateTimeFilter<"Detection"> | Date | string
    updatedAt?: DateTimeFilter<"Detection"> | Date | string
    drone?: XOR<DroneScalarRelationFilter, DroneWhereInput>
  }, "id">

  export type DetectionOrderByWithAggregationInput = {
    id?: SortOrder
    droneId?: SortOrder
    objectType?: SortOrder
    confidence?: SortOrder
    coordinates?: SortOrder
    timestamp?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DetectionCountOrderByAggregateInput
    _avg?: DetectionAvgOrderByAggregateInput
    _max?: DetectionMaxOrderByAggregateInput
    _min?: DetectionMinOrderByAggregateInput
    _sum?: DetectionSumOrderByAggregateInput
  }

  export type DetectionScalarWhereWithAggregatesInput = {
    AND?: DetectionScalarWhereWithAggregatesInput | DetectionScalarWhereWithAggregatesInput[]
    OR?: DetectionScalarWhereWithAggregatesInput[]
    NOT?: DetectionScalarWhereWithAggregatesInput | DetectionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Detection"> | number
    droneId?: IntWithAggregatesFilter<"Detection"> | number
    objectType?: StringWithAggregatesFilter<"Detection"> | string
    confidence?: FloatWithAggregatesFilter<"Detection"> | number
    coordinates?: JsonWithAggregatesFilter<"Detection">
    timestamp?: DateTimeWithAggregatesFilter<"Detection"> | Date | string
    imageUrl?: StringNullableWithAggregatesFilter<"Detection"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"Detection">
    createdAt?: DateTimeWithAggregatesFilter<"Detection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Detection"> | Date | string
  }

  export type RoleCreateInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    username: string
    email: string
    passwordHash: string
    fullName?: string | null
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    drones?: DroneCreateNestedManyWithoutOwnerInput
    routes?: RouteCreateNestedManyWithoutUserInput
    flightHistory?: FlightHistoryCreateNestedManyWithoutPilotInput
    events?: EventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    passwordHash: string
    fullName?: string | null
    roleId: number
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    drones?: DroneUncheckedCreateNestedManyWithoutOwnerInput
    routes?: RouteUncheckedCreateNestedManyWithoutUserInput
    flightHistory?: FlightHistoryUncheckedCreateNestedManyWithoutPilotInput
    events?: EventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    drones?: DroneUpdateManyWithoutOwnerNestedInput
    routes?: RouteUpdateManyWithoutUserNestedInput
    flightHistory?: FlightHistoryUpdateManyWithoutPilotNestedInput
    events?: EventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drones?: DroneUncheckedUpdateManyWithoutOwnerNestedInput
    routes?: RouteUncheckedUpdateManyWithoutUserNestedInput
    flightHistory?: FlightHistoryUncheckedUpdateManyWithoutPilotNestedInput
    events?: EventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    email: string
    passwordHash: string
    fullName?: string | null
    roleId: number
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DroneCreateInput = {
    name: string
    model: string
    serialNumber: string
    status?: $Enums.DroneStatus
    batteryLevel?: number
    latitude?: number | null
    longitude?: number | null
    altitude?: number | null
    speed?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutDronesInput
    routes?: RouteCreateNestedManyWithoutDroneInput
    flightHistory?: FlightHistoryCreateNestedManyWithoutDroneInput
    events?: EventCreateNestedManyWithoutDroneInput
    detections?: DetectionCreateNestedManyWithoutDroneInput
  }

  export type DroneUncheckedCreateInput = {
    id?: number
    name: string
    model: string
    serialNumber: string
    status?: $Enums.DroneStatus
    batteryLevel?: number
    latitude?: number | null
    longitude?: number | null
    altitude?: number | null
    speed?: number | null
    ownerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    routes?: RouteUncheckedCreateNestedManyWithoutDroneInput
    flightHistory?: FlightHistoryUncheckedCreateNestedManyWithoutDroneInput
    events?: EventUncheckedCreateNestedManyWithoutDroneInput
    detections?: DetectionUncheckedCreateNestedManyWithoutDroneInput
  }

  export type DroneUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumDroneStatusFieldUpdateOperationsInput | $Enums.DroneStatus
    batteryLevel?: IntFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    speed?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutDronesNestedInput
    routes?: RouteUpdateManyWithoutDroneNestedInput
    flightHistory?: FlightHistoryUpdateManyWithoutDroneNestedInput
    events?: EventUpdateManyWithoutDroneNestedInput
    detections?: DetectionUpdateManyWithoutDroneNestedInput
  }

  export type DroneUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumDroneStatusFieldUpdateOperationsInput | $Enums.DroneStatus
    batteryLevel?: IntFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    speed?: NullableFloatFieldUpdateOperationsInput | number | null
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routes?: RouteUncheckedUpdateManyWithoutDroneNestedInput
    flightHistory?: FlightHistoryUncheckedUpdateManyWithoutDroneNestedInput
    events?: EventUncheckedUpdateManyWithoutDroneNestedInput
    detections?: DetectionUncheckedUpdateManyWithoutDroneNestedInput
  }

  export type DroneCreateManyInput = {
    id?: number
    name: string
    model: string
    serialNumber: string
    status?: $Enums.DroneStatus
    batteryLevel?: number
    latitude?: number | null
    longitude?: number | null
    altitude?: number | null
    speed?: number | null
    ownerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DroneUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumDroneStatusFieldUpdateOperationsInput | $Enums.DroneStatus
    batteryLevel?: IntFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    speed?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DroneUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumDroneStatusFieldUpdateOperationsInput | $Enums.DroneStatus
    batteryLevel?: IntFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    speed?: NullableFloatFieldUpdateOperationsInput | number | null
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteCreateInput = {
    name: string
    description?: string | null
    coordinates: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRoutesInput
    drone?: DroneCreateNestedOneWithoutRoutesInput
    flights?: FlightHistoryCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    coordinates: JsonNullValueInput | InputJsonValue
    createdBy: number
    droneId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flights?: FlightHistoryUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coordinates?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRoutesNestedInput
    drone?: DroneUpdateOneWithoutRoutesNestedInput
    flights?: FlightHistoryUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coordinates?: JsonNullValueInput | InputJsonValue
    createdBy?: IntFieldUpdateOperationsInput | number
    droneId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flights?: FlightHistoryUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type RouteCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    coordinates: JsonNullValueInput | InputJsonValue
    createdBy: number
    droneId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RouteUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coordinates?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coordinates?: JsonNullValueInput | InputJsonValue
    createdBy?: IntFieldUpdateOperationsInput | number
    droneId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlightHistoryCreateInput = {
    startTime: Date | string
    endTime?: Date | string | null
    distance?: number | null
    maxAltitude?: number | null
    maxSpeed?: number | null
    telemetry?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    drone: DroneCreateNestedOneWithoutFlightHistoryInput
    route?: RouteCreateNestedOneWithoutFlightsInput
    pilot: UserCreateNestedOneWithoutFlightHistoryInput
  }

  export type FlightHistoryUncheckedCreateInput = {
    id?: number
    droneId: number
    routeId?: number | null
    pilotId: number
    startTime: Date | string
    endTime?: Date | string | null
    distance?: number | null
    maxAltitude?: number | null
    maxSpeed?: number | null
    telemetry?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlightHistoryUpdateInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    maxAltitude?: NullableFloatFieldUpdateOperationsInput | number | null
    maxSpeed?: NullableFloatFieldUpdateOperationsInput | number | null
    telemetry?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drone?: DroneUpdateOneRequiredWithoutFlightHistoryNestedInput
    route?: RouteUpdateOneWithoutFlightsNestedInput
    pilot?: UserUpdateOneRequiredWithoutFlightHistoryNestedInput
  }

  export type FlightHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    droneId?: IntFieldUpdateOperationsInput | number
    routeId?: NullableIntFieldUpdateOperationsInput | number | null
    pilotId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    maxAltitude?: NullableFloatFieldUpdateOperationsInput | number | null
    maxSpeed?: NullableFloatFieldUpdateOperationsInput | number | null
    telemetry?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlightHistoryCreateManyInput = {
    id?: number
    droneId: number
    routeId?: number | null
    pilotId: number
    startTime: Date | string
    endTime?: Date | string | null
    distance?: number | null
    maxAltitude?: number | null
    maxSpeed?: number | null
    telemetry?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlightHistoryUpdateManyMutationInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    maxAltitude?: NullableFloatFieldUpdateOperationsInput | number | null
    maxSpeed?: NullableFloatFieldUpdateOperationsInput | number | null
    telemetry?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlightHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    droneId?: IntFieldUpdateOperationsInput | number
    routeId?: NullableIntFieldUpdateOperationsInput | number | null
    pilotId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    maxAltitude?: NullableFloatFieldUpdateOperationsInput | number | null
    maxSpeed?: NullableFloatFieldUpdateOperationsInput | number | null
    telemetry?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    type: $Enums.EventType
    message: string
    severity: $Enums.Severity
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    drone?: DroneCreateNestedOneWithoutEventsInput
    user?: UserCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateInput = {
    id?: number
    type: $Enums.EventType
    message: string
    severity: $Enums.Severity
    read?: boolean
    droneId?: number | null
    userId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateInput = {
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    message?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drone?: DroneUpdateOneWithoutEventsNestedInput
    user?: UserUpdateOneWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    message?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    read?: BoolFieldUpdateOperationsInput | boolean
    droneId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateManyInput = {
    id?: number
    type: $Enums.EventType
    message: string
    severity: $Enums.Severity
    read?: boolean
    droneId?: number | null
    userId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    message?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    message?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    read?: BoolFieldUpdateOperationsInput | boolean
    droneId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetectionCreateInput = {
    objectType: string
    confidence: number
    coordinates: JsonNullValueInput | InputJsonValue
    timestamp: Date | string
    imageUrl?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    drone: DroneCreateNestedOneWithoutDetectionsInput
  }

  export type DetectionUncheckedCreateInput = {
    id?: number
    droneId: number
    objectType: string
    confidence: number
    coordinates: JsonNullValueInput | InputJsonValue
    timestamp: Date | string
    imageUrl?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DetectionUpdateInput = {
    objectType?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    coordinates?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drone?: DroneUpdateOneRequiredWithoutDetectionsNestedInput
  }

  export type DetectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    droneId?: IntFieldUpdateOperationsInput | number
    objectType?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    coordinates?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetectionCreateManyInput = {
    id?: number
    droneId: number
    objectType: string
    confidence: number
    coordinates: JsonNullValueInput | InputJsonValue
    timestamp: Date | string
    imageUrl?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DetectionUpdateManyMutationInput = {
    objectType?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    coordinates?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    droneId?: IntFieldUpdateOperationsInput | number
    objectType?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    coordinates?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type DroneListRelationFilter = {
    every?: DroneWhereInput
    some?: DroneWhereInput
    none?: DroneWhereInput
  }

  export type RouteListRelationFilter = {
    every?: RouteWhereInput
    some?: RouteWhereInput
    none?: RouteWhereInput
  }

  export type FlightHistoryListRelationFilter = {
    every?: FlightHistoryWhereInput
    some?: FlightHistoryWhereInput
    none?: FlightHistoryWhereInput
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type DroneOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RouteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlightHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    roleId?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    roleId?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    roleId?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumDroneStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DroneStatus | EnumDroneStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DroneStatus[]
    notIn?: $Enums.DroneStatus[]
    not?: NestedEnumDroneStatusFilter<$PrismaModel> | $Enums.DroneStatus
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DetectionListRelationFilter = {
    every?: DetectionWhereInput
    some?: DetectionWhereInput
    none?: DetectionWhereInput
  }

  export type DetectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DroneCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    model?: SortOrder
    serialNumber?: SortOrder
    status?: SortOrder
    batteryLevel?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    altitude?: SortOrder
    speed?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DroneAvgOrderByAggregateInput = {
    id?: SortOrder
    batteryLevel?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    altitude?: SortOrder
    speed?: SortOrder
    ownerId?: SortOrder
  }

  export type DroneMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    model?: SortOrder
    serialNumber?: SortOrder
    status?: SortOrder
    batteryLevel?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    altitude?: SortOrder
    speed?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DroneMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    model?: SortOrder
    serialNumber?: SortOrder
    status?: SortOrder
    batteryLevel?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    altitude?: SortOrder
    speed?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DroneSumOrderByAggregateInput = {
    id?: SortOrder
    batteryLevel?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    altitude?: SortOrder
    speed?: SortOrder
    ownerId?: SortOrder
  }

  export type EnumDroneStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DroneStatus | EnumDroneStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DroneStatus[]
    notIn?: $Enums.DroneStatus[]
    not?: NestedEnumDroneStatusWithAggregatesFilter<$PrismaModel> | $Enums.DroneStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDroneStatusFilter<$PrismaModel>
    _max?: NestedEnumDroneStatusFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DroneNullableScalarRelationFilter = {
    is?: DroneWhereInput | null
    isNot?: DroneWhereInput | null
  }

  export type RouteCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    coordinates?: SortOrder
    createdBy?: SortOrder
    droneId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RouteAvgOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
    droneId?: SortOrder
  }

  export type RouteMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdBy?: SortOrder
    droneId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RouteMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdBy?: SortOrder
    droneId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RouteSumOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
    droneId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DroneScalarRelationFilter = {
    is?: DroneWhereInput
    isNot?: DroneWhereInput
  }

  export type RouteNullableScalarRelationFilter = {
    is?: RouteWhereInput | null
    isNot?: RouteWhereInput | null
  }

  export type FlightHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    droneId?: SortOrder
    routeId?: SortOrder
    pilotId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    distance?: SortOrder
    maxAltitude?: SortOrder
    maxSpeed?: SortOrder
    telemetry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlightHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    droneId?: SortOrder
    routeId?: SortOrder
    pilotId?: SortOrder
    distance?: SortOrder
    maxAltitude?: SortOrder
    maxSpeed?: SortOrder
  }

  export type FlightHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    droneId?: SortOrder
    routeId?: SortOrder
    pilotId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    distance?: SortOrder
    maxAltitude?: SortOrder
    maxSpeed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlightHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    droneId?: SortOrder
    routeId?: SortOrder
    pilotId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    distance?: SortOrder
    maxAltitude?: SortOrder
    maxSpeed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlightHistorySumOrderByAggregateInput = {
    id?: SortOrder
    droneId?: SortOrder
    routeId?: SortOrder
    pilotId?: SortOrder
    distance?: SortOrder
    maxAltitude?: SortOrder
    maxSpeed?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[]
    notIn?: $Enums.EventType[]
    not?: NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType
  }

  export type EnumSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[]
    notIn?: $Enums.Severity[]
    not?: NestedEnumSeverityFilter<$PrismaModel> | $Enums.Severity
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    severity?: SortOrder
    read?: SortOrder
    droneId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    id?: SortOrder
    droneId?: SortOrder
    userId?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    severity?: SortOrder
    read?: SortOrder
    droneId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    severity?: SortOrder
    read?: SortOrder
    droneId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    id?: SortOrder
    droneId?: SortOrder
    userId?: SortOrder
  }

  export type EnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[]
    notIn?: $Enums.EventType[]
    not?: NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventTypeFilter<$PrismaModel>
    _max?: NestedEnumEventTypeFilter<$PrismaModel>
  }

  export type EnumSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[]
    notIn?: $Enums.Severity[]
    not?: NestedEnumSeverityWithAggregatesFilter<$PrismaModel> | $Enums.Severity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeverityFilter<$PrismaModel>
    _max?: NestedEnumSeverityFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DetectionCountOrderByAggregateInput = {
    id?: SortOrder
    droneId?: SortOrder
    objectType?: SortOrder
    confidence?: SortOrder
    coordinates?: SortOrder
    timestamp?: SortOrder
    imageUrl?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DetectionAvgOrderByAggregateInput = {
    id?: SortOrder
    droneId?: SortOrder
    confidence?: SortOrder
  }

  export type DetectionMaxOrderByAggregateInput = {
    id?: SortOrder
    droneId?: SortOrder
    objectType?: SortOrder
    confidence?: SortOrder
    timestamp?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DetectionMinOrderByAggregateInput = {
    id?: SortOrder
    droneId?: SortOrder
    objectType?: SortOrder
    confidence?: SortOrder
    timestamp?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DetectionSumOrderByAggregateInput = {
    id?: SortOrder
    droneId?: SortOrder
    confidence?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type DroneCreateNestedManyWithoutOwnerInput = {
    create?: XOR<DroneCreateWithoutOwnerInput, DroneUncheckedCreateWithoutOwnerInput> | DroneCreateWithoutOwnerInput[] | DroneUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: DroneCreateOrConnectWithoutOwnerInput | DroneCreateOrConnectWithoutOwnerInput[]
    createMany?: DroneCreateManyOwnerInputEnvelope
    connect?: DroneWhereUniqueInput | DroneWhereUniqueInput[]
  }

  export type RouteCreateNestedManyWithoutUserInput = {
    create?: XOR<RouteCreateWithoutUserInput, RouteUncheckedCreateWithoutUserInput> | RouteCreateWithoutUserInput[] | RouteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutUserInput | RouteCreateOrConnectWithoutUserInput[]
    createMany?: RouteCreateManyUserInputEnvelope
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
  }

  export type FlightHistoryCreateNestedManyWithoutPilotInput = {
    create?: XOR<FlightHistoryCreateWithoutPilotInput, FlightHistoryUncheckedCreateWithoutPilotInput> | FlightHistoryCreateWithoutPilotInput[] | FlightHistoryUncheckedCreateWithoutPilotInput[]
    connectOrCreate?: FlightHistoryCreateOrConnectWithoutPilotInput | FlightHistoryCreateOrConnectWithoutPilotInput[]
    createMany?: FlightHistoryCreateManyPilotInputEnvelope
    connect?: FlightHistoryWhereUniqueInput | FlightHistoryWhereUniqueInput[]
  }

  export type EventCreateNestedManyWithoutUserInput = {
    create?: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput> | EventCreateWithoutUserInput[] | EventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventCreateOrConnectWithoutUserInput | EventCreateOrConnectWithoutUserInput[]
    createMany?: EventCreateManyUserInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type DroneUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<DroneCreateWithoutOwnerInput, DroneUncheckedCreateWithoutOwnerInput> | DroneCreateWithoutOwnerInput[] | DroneUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: DroneCreateOrConnectWithoutOwnerInput | DroneCreateOrConnectWithoutOwnerInput[]
    createMany?: DroneCreateManyOwnerInputEnvelope
    connect?: DroneWhereUniqueInput | DroneWhereUniqueInput[]
  }

  export type RouteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RouteCreateWithoutUserInput, RouteUncheckedCreateWithoutUserInput> | RouteCreateWithoutUserInput[] | RouteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutUserInput | RouteCreateOrConnectWithoutUserInput[]
    createMany?: RouteCreateManyUserInputEnvelope
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
  }

  export type FlightHistoryUncheckedCreateNestedManyWithoutPilotInput = {
    create?: XOR<FlightHistoryCreateWithoutPilotInput, FlightHistoryUncheckedCreateWithoutPilotInput> | FlightHistoryCreateWithoutPilotInput[] | FlightHistoryUncheckedCreateWithoutPilotInput[]
    connectOrCreate?: FlightHistoryCreateOrConnectWithoutPilotInput | FlightHistoryCreateOrConnectWithoutPilotInput[]
    createMany?: FlightHistoryCreateManyPilotInputEnvelope
    connect?: FlightHistoryWhereUniqueInput | FlightHistoryWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput> | EventCreateWithoutUserInput[] | EventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventCreateOrConnectWithoutUserInput | EventCreateOrConnectWithoutUserInput[]
    createMany?: EventCreateManyUserInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type DroneUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<DroneCreateWithoutOwnerInput, DroneUncheckedCreateWithoutOwnerInput> | DroneCreateWithoutOwnerInput[] | DroneUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: DroneCreateOrConnectWithoutOwnerInput | DroneCreateOrConnectWithoutOwnerInput[]
    upsert?: DroneUpsertWithWhereUniqueWithoutOwnerInput | DroneUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: DroneCreateManyOwnerInputEnvelope
    set?: DroneWhereUniqueInput | DroneWhereUniqueInput[]
    disconnect?: DroneWhereUniqueInput | DroneWhereUniqueInput[]
    delete?: DroneWhereUniqueInput | DroneWhereUniqueInput[]
    connect?: DroneWhereUniqueInput | DroneWhereUniqueInput[]
    update?: DroneUpdateWithWhereUniqueWithoutOwnerInput | DroneUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: DroneUpdateManyWithWhereWithoutOwnerInput | DroneUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: DroneScalarWhereInput | DroneScalarWhereInput[]
  }

  export type RouteUpdateManyWithoutUserNestedInput = {
    create?: XOR<RouteCreateWithoutUserInput, RouteUncheckedCreateWithoutUserInput> | RouteCreateWithoutUserInput[] | RouteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutUserInput | RouteCreateOrConnectWithoutUserInput[]
    upsert?: RouteUpsertWithWhereUniqueWithoutUserInput | RouteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RouteCreateManyUserInputEnvelope
    set?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    disconnect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    delete?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    update?: RouteUpdateWithWhereUniqueWithoutUserInput | RouteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RouteUpdateManyWithWhereWithoutUserInput | RouteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RouteScalarWhereInput | RouteScalarWhereInput[]
  }

  export type FlightHistoryUpdateManyWithoutPilotNestedInput = {
    create?: XOR<FlightHistoryCreateWithoutPilotInput, FlightHistoryUncheckedCreateWithoutPilotInput> | FlightHistoryCreateWithoutPilotInput[] | FlightHistoryUncheckedCreateWithoutPilotInput[]
    connectOrCreate?: FlightHistoryCreateOrConnectWithoutPilotInput | FlightHistoryCreateOrConnectWithoutPilotInput[]
    upsert?: FlightHistoryUpsertWithWhereUniqueWithoutPilotInput | FlightHistoryUpsertWithWhereUniqueWithoutPilotInput[]
    createMany?: FlightHistoryCreateManyPilotInputEnvelope
    set?: FlightHistoryWhereUniqueInput | FlightHistoryWhereUniqueInput[]
    disconnect?: FlightHistoryWhereUniqueInput | FlightHistoryWhereUniqueInput[]
    delete?: FlightHistoryWhereUniqueInput | FlightHistoryWhereUniqueInput[]
    connect?: FlightHistoryWhereUniqueInput | FlightHistoryWhereUniqueInput[]
    update?: FlightHistoryUpdateWithWhereUniqueWithoutPilotInput | FlightHistoryUpdateWithWhereUniqueWithoutPilotInput[]
    updateMany?: FlightHistoryUpdateManyWithWhereWithoutPilotInput | FlightHistoryUpdateManyWithWhereWithoutPilotInput[]
    deleteMany?: FlightHistoryScalarWhereInput | FlightHistoryScalarWhereInput[]
  }

  export type EventUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput> | EventCreateWithoutUserInput[] | EventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventCreateOrConnectWithoutUserInput | EventCreateOrConnectWithoutUserInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutUserInput | EventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventCreateManyUserInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutUserInput | EventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventUpdateManyWithWhereWithoutUserInput | EventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type DroneUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<DroneCreateWithoutOwnerInput, DroneUncheckedCreateWithoutOwnerInput> | DroneCreateWithoutOwnerInput[] | DroneUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: DroneCreateOrConnectWithoutOwnerInput | DroneCreateOrConnectWithoutOwnerInput[]
    upsert?: DroneUpsertWithWhereUniqueWithoutOwnerInput | DroneUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: DroneCreateManyOwnerInputEnvelope
    set?: DroneWhereUniqueInput | DroneWhereUniqueInput[]
    disconnect?: DroneWhereUniqueInput | DroneWhereUniqueInput[]
    delete?: DroneWhereUniqueInput | DroneWhereUniqueInput[]
    connect?: DroneWhereUniqueInput | DroneWhereUniqueInput[]
    update?: DroneUpdateWithWhereUniqueWithoutOwnerInput | DroneUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: DroneUpdateManyWithWhereWithoutOwnerInput | DroneUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: DroneScalarWhereInput | DroneScalarWhereInput[]
  }

  export type RouteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RouteCreateWithoutUserInput, RouteUncheckedCreateWithoutUserInput> | RouteCreateWithoutUserInput[] | RouteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutUserInput | RouteCreateOrConnectWithoutUserInput[]
    upsert?: RouteUpsertWithWhereUniqueWithoutUserInput | RouteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RouteCreateManyUserInputEnvelope
    set?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    disconnect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    delete?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    update?: RouteUpdateWithWhereUniqueWithoutUserInput | RouteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RouteUpdateManyWithWhereWithoutUserInput | RouteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RouteScalarWhereInput | RouteScalarWhereInput[]
  }

  export type FlightHistoryUncheckedUpdateManyWithoutPilotNestedInput = {
    create?: XOR<FlightHistoryCreateWithoutPilotInput, FlightHistoryUncheckedCreateWithoutPilotInput> | FlightHistoryCreateWithoutPilotInput[] | FlightHistoryUncheckedCreateWithoutPilotInput[]
    connectOrCreate?: FlightHistoryCreateOrConnectWithoutPilotInput | FlightHistoryCreateOrConnectWithoutPilotInput[]
    upsert?: FlightHistoryUpsertWithWhereUniqueWithoutPilotInput | FlightHistoryUpsertWithWhereUniqueWithoutPilotInput[]
    createMany?: FlightHistoryCreateManyPilotInputEnvelope
    set?: FlightHistoryWhereUniqueInput | FlightHistoryWhereUniqueInput[]
    disconnect?: FlightHistoryWhereUniqueInput | FlightHistoryWhereUniqueInput[]
    delete?: FlightHistoryWhereUniqueInput | FlightHistoryWhereUniqueInput[]
    connect?: FlightHistoryWhereUniqueInput | FlightHistoryWhereUniqueInput[]
    update?: FlightHistoryUpdateWithWhereUniqueWithoutPilotInput | FlightHistoryUpdateWithWhereUniqueWithoutPilotInput[]
    updateMany?: FlightHistoryUpdateManyWithWhereWithoutPilotInput | FlightHistoryUpdateManyWithWhereWithoutPilotInput[]
    deleteMany?: FlightHistoryScalarWhereInput | FlightHistoryScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput> | EventCreateWithoutUserInput[] | EventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventCreateOrConnectWithoutUserInput | EventCreateOrConnectWithoutUserInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutUserInput | EventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventCreateManyUserInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutUserInput | EventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventUpdateManyWithWhereWithoutUserInput | EventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDronesInput = {
    create?: XOR<UserCreateWithoutDronesInput, UserUncheckedCreateWithoutDronesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDronesInput
    connect?: UserWhereUniqueInput
  }

  export type RouteCreateNestedManyWithoutDroneInput = {
    create?: XOR<RouteCreateWithoutDroneInput, RouteUncheckedCreateWithoutDroneInput> | RouteCreateWithoutDroneInput[] | RouteUncheckedCreateWithoutDroneInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutDroneInput | RouteCreateOrConnectWithoutDroneInput[]
    createMany?: RouteCreateManyDroneInputEnvelope
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
  }

  export type FlightHistoryCreateNestedManyWithoutDroneInput = {
    create?: XOR<FlightHistoryCreateWithoutDroneInput, FlightHistoryUncheckedCreateWithoutDroneInput> | FlightHistoryCreateWithoutDroneInput[] | FlightHistoryUncheckedCreateWithoutDroneInput[]
    connectOrCreate?: FlightHistoryCreateOrConnectWithoutDroneInput | FlightHistoryCreateOrConnectWithoutDroneInput[]
    createMany?: FlightHistoryCreateManyDroneInputEnvelope
    connect?: FlightHistoryWhereUniqueInput | FlightHistoryWhereUniqueInput[]
  }

  export type EventCreateNestedManyWithoutDroneInput = {
    create?: XOR<EventCreateWithoutDroneInput, EventUncheckedCreateWithoutDroneInput> | EventCreateWithoutDroneInput[] | EventUncheckedCreateWithoutDroneInput[]
    connectOrCreate?: EventCreateOrConnectWithoutDroneInput | EventCreateOrConnectWithoutDroneInput[]
    createMany?: EventCreateManyDroneInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type DetectionCreateNestedManyWithoutDroneInput = {
    create?: XOR<DetectionCreateWithoutDroneInput, DetectionUncheckedCreateWithoutDroneInput> | DetectionCreateWithoutDroneInput[] | DetectionUncheckedCreateWithoutDroneInput[]
    connectOrCreate?: DetectionCreateOrConnectWithoutDroneInput | DetectionCreateOrConnectWithoutDroneInput[]
    createMany?: DetectionCreateManyDroneInputEnvelope
    connect?: DetectionWhereUniqueInput | DetectionWhereUniqueInput[]
  }

  export type RouteUncheckedCreateNestedManyWithoutDroneInput = {
    create?: XOR<RouteCreateWithoutDroneInput, RouteUncheckedCreateWithoutDroneInput> | RouteCreateWithoutDroneInput[] | RouteUncheckedCreateWithoutDroneInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutDroneInput | RouteCreateOrConnectWithoutDroneInput[]
    createMany?: RouteCreateManyDroneInputEnvelope
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
  }

  export type FlightHistoryUncheckedCreateNestedManyWithoutDroneInput = {
    create?: XOR<FlightHistoryCreateWithoutDroneInput, FlightHistoryUncheckedCreateWithoutDroneInput> | FlightHistoryCreateWithoutDroneInput[] | FlightHistoryUncheckedCreateWithoutDroneInput[]
    connectOrCreate?: FlightHistoryCreateOrConnectWithoutDroneInput | FlightHistoryCreateOrConnectWithoutDroneInput[]
    createMany?: FlightHistoryCreateManyDroneInputEnvelope
    connect?: FlightHistoryWhereUniqueInput | FlightHistoryWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutDroneInput = {
    create?: XOR<EventCreateWithoutDroneInput, EventUncheckedCreateWithoutDroneInput> | EventCreateWithoutDroneInput[] | EventUncheckedCreateWithoutDroneInput[]
    connectOrCreate?: EventCreateOrConnectWithoutDroneInput | EventCreateOrConnectWithoutDroneInput[]
    createMany?: EventCreateManyDroneInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type DetectionUncheckedCreateNestedManyWithoutDroneInput = {
    create?: XOR<DetectionCreateWithoutDroneInput, DetectionUncheckedCreateWithoutDroneInput> | DetectionCreateWithoutDroneInput[] | DetectionUncheckedCreateWithoutDroneInput[]
    connectOrCreate?: DetectionCreateOrConnectWithoutDroneInput | DetectionCreateOrConnectWithoutDroneInput[]
    createMany?: DetectionCreateManyDroneInputEnvelope
    connect?: DetectionWhereUniqueInput | DetectionWhereUniqueInput[]
  }

  export type EnumDroneStatusFieldUpdateOperationsInput = {
    set?: $Enums.DroneStatus
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutDronesNestedInput = {
    create?: XOR<UserCreateWithoutDronesInput, UserUncheckedCreateWithoutDronesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDronesInput
    upsert?: UserUpsertWithoutDronesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDronesInput, UserUpdateWithoutDronesInput>, UserUncheckedUpdateWithoutDronesInput>
  }

  export type RouteUpdateManyWithoutDroneNestedInput = {
    create?: XOR<RouteCreateWithoutDroneInput, RouteUncheckedCreateWithoutDroneInput> | RouteCreateWithoutDroneInput[] | RouteUncheckedCreateWithoutDroneInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutDroneInput | RouteCreateOrConnectWithoutDroneInput[]
    upsert?: RouteUpsertWithWhereUniqueWithoutDroneInput | RouteUpsertWithWhereUniqueWithoutDroneInput[]
    createMany?: RouteCreateManyDroneInputEnvelope
    set?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    disconnect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    delete?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    update?: RouteUpdateWithWhereUniqueWithoutDroneInput | RouteUpdateWithWhereUniqueWithoutDroneInput[]
    updateMany?: RouteUpdateManyWithWhereWithoutDroneInput | RouteUpdateManyWithWhereWithoutDroneInput[]
    deleteMany?: RouteScalarWhereInput | RouteScalarWhereInput[]
  }

  export type FlightHistoryUpdateManyWithoutDroneNestedInput = {
    create?: XOR<FlightHistoryCreateWithoutDroneInput, FlightHistoryUncheckedCreateWithoutDroneInput> | FlightHistoryCreateWithoutDroneInput[] | FlightHistoryUncheckedCreateWithoutDroneInput[]
    connectOrCreate?: FlightHistoryCreateOrConnectWithoutDroneInput | FlightHistoryCreateOrConnectWithoutDroneInput[]
    upsert?: FlightHistoryUpsertWithWhereUniqueWithoutDroneInput | FlightHistoryUpsertWithWhereUniqueWithoutDroneInput[]
    createMany?: FlightHistoryCreateManyDroneInputEnvelope
    set?: FlightHistoryWhereUniqueInput | FlightHistoryWhereUniqueInput[]
    disconnect?: FlightHistoryWhereUniqueInput | FlightHistoryWhereUniqueInput[]
    delete?: FlightHistoryWhereUniqueInput | FlightHistoryWhereUniqueInput[]
    connect?: FlightHistoryWhereUniqueInput | FlightHistoryWhereUniqueInput[]
    update?: FlightHistoryUpdateWithWhereUniqueWithoutDroneInput | FlightHistoryUpdateWithWhereUniqueWithoutDroneInput[]
    updateMany?: FlightHistoryUpdateManyWithWhereWithoutDroneInput | FlightHistoryUpdateManyWithWhereWithoutDroneInput[]
    deleteMany?: FlightHistoryScalarWhereInput | FlightHistoryScalarWhereInput[]
  }

  export type EventUpdateManyWithoutDroneNestedInput = {
    create?: XOR<EventCreateWithoutDroneInput, EventUncheckedCreateWithoutDroneInput> | EventCreateWithoutDroneInput[] | EventUncheckedCreateWithoutDroneInput[]
    connectOrCreate?: EventCreateOrConnectWithoutDroneInput | EventCreateOrConnectWithoutDroneInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutDroneInput | EventUpsertWithWhereUniqueWithoutDroneInput[]
    createMany?: EventCreateManyDroneInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutDroneInput | EventUpdateWithWhereUniqueWithoutDroneInput[]
    updateMany?: EventUpdateManyWithWhereWithoutDroneInput | EventUpdateManyWithWhereWithoutDroneInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type DetectionUpdateManyWithoutDroneNestedInput = {
    create?: XOR<DetectionCreateWithoutDroneInput, DetectionUncheckedCreateWithoutDroneInput> | DetectionCreateWithoutDroneInput[] | DetectionUncheckedCreateWithoutDroneInput[]
    connectOrCreate?: DetectionCreateOrConnectWithoutDroneInput | DetectionCreateOrConnectWithoutDroneInput[]
    upsert?: DetectionUpsertWithWhereUniqueWithoutDroneInput | DetectionUpsertWithWhereUniqueWithoutDroneInput[]
    createMany?: DetectionCreateManyDroneInputEnvelope
    set?: DetectionWhereUniqueInput | DetectionWhereUniqueInput[]
    disconnect?: DetectionWhereUniqueInput | DetectionWhereUniqueInput[]
    delete?: DetectionWhereUniqueInput | DetectionWhereUniqueInput[]
    connect?: DetectionWhereUniqueInput | DetectionWhereUniqueInput[]
    update?: DetectionUpdateWithWhereUniqueWithoutDroneInput | DetectionUpdateWithWhereUniqueWithoutDroneInput[]
    updateMany?: DetectionUpdateManyWithWhereWithoutDroneInput | DetectionUpdateManyWithWhereWithoutDroneInput[]
    deleteMany?: DetectionScalarWhereInput | DetectionScalarWhereInput[]
  }

  export type RouteUncheckedUpdateManyWithoutDroneNestedInput = {
    create?: XOR<RouteCreateWithoutDroneInput, RouteUncheckedCreateWithoutDroneInput> | RouteCreateWithoutDroneInput[] | RouteUncheckedCreateWithoutDroneInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutDroneInput | RouteCreateOrConnectWithoutDroneInput[]
    upsert?: RouteUpsertWithWhereUniqueWithoutDroneInput | RouteUpsertWithWhereUniqueWithoutDroneInput[]
    createMany?: RouteCreateManyDroneInputEnvelope
    set?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    disconnect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    delete?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    update?: RouteUpdateWithWhereUniqueWithoutDroneInput | RouteUpdateWithWhereUniqueWithoutDroneInput[]
    updateMany?: RouteUpdateManyWithWhereWithoutDroneInput | RouteUpdateManyWithWhereWithoutDroneInput[]
    deleteMany?: RouteScalarWhereInput | RouteScalarWhereInput[]
  }

  export type FlightHistoryUncheckedUpdateManyWithoutDroneNestedInput = {
    create?: XOR<FlightHistoryCreateWithoutDroneInput, FlightHistoryUncheckedCreateWithoutDroneInput> | FlightHistoryCreateWithoutDroneInput[] | FlightHistoryUncheckedCreateWithoutDroneInput[]
    connectOrCreate?: FlightHistoryCreateOrConnectWithoutDroneInput | FlightHistoryCreateOrConnectWithoutDroneInput[]
    upsert?: FlightHistoryUpsertWithWhereUniqueWithoutDroneInput | FlightHistoryUpsertWithWhereUniqueWithoutDroneInput[]
    createMany?: FlightHistoryCreateManyDroneInputEnvelope
    set?: FlightHistoryWhereUniqueInput | FlightHistoryWhereUniqueInput[]
    disconnect?: FlightHistoryWhereUniqueInput | FlightHistoryWhereUniqueInput[]
    delete?: FlightHistoryWhereUniqueInput | FlightHistoryWhereUniqueInput[]
    connect?: FlightHistoryWhereUniqueInput | FlightHistoryWhereUniqueInput[]
    update?: FlightHistoryUpdateWithWhereUniqueWithoutDroneInput | FlightHistoryUpdateWithWhereUniqueWithoutDroneInput[]
    updateMany?: FlightHistoryUpdateManyWithWhereWithoutDroneInput | FlightHistoryUpdateManyWithWhereWithoutDroneInput[]
    deleteMany?: FlightHistoryScalarWhereInput | FlightHistoryScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutDroneNestedInput = {
    create?: XOR<EventCreateWithoutDroneInput, EventUncheckedCreateWithoutDroneInput> | EventCreateWithoutDroneInput[] | EventUncheckedCreateWithoutDroneInput[]
    connectOrCreate?: EventCreateOrConnectWithoutDroneInput | EventCreateOrConnectWithoutDroneInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutDroneInput | EventUpsertWithWhereUniqueWithoutDroneInput[]
    createMany?: EventCreateManyDroneInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutDroneInput | EventUpdateWithWhereUniqueWithoutDroneInput[]
    updateMany?: EventUpdateManyWithWhereWithoutDroneInput | EventUpdateManyWithWhereWithoutDroneInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type DetectionUncheckedUpdateManyWithoutDroneNestedInput = {
    create?: XOR<DetectionCreateWithoutDroneInput, DetectionUncheckedCreateWithoutDroneInput> | DetectionCreateWithoutDroneInput[] | DetectionUncheckedCreateWithoutDroneInput[]
    connectOrCreate?: DetectionCreateOrConnectWithoutDroneInput | DetectionCreateOrConnectWithoutDroneInput[]
    upsert?: DetectionUpsertWithWhereUniqueWithoutDroneInput | DetectionUpsertWithWhereUniqueWithoutDroneInput[]
    createMany?: DetectionCreateManyDroneInputEnvelope
    set?: DetectionWhereUniqueInput | DetectionWhereUniqueInput[]
    disconnect?: DetectionWhereUniqueInput | DetectionWhereUniqueInput[]
    delete?: DetectionWhereUniqueInput | DetectionWhereUniqueInput[]
    connect?: DetectionWhereUniqueInput | DetectionWhereUniqueInput[]
    update?: DetectionUpdateWithWhereUniqueWithoutDroneInput | DetectionUpdateWithWhereUniqueWithoutDroneInput[]
    updateMany?: DetectionUpdateManyWithWhereWithoutDroneInput | DetectionUpdateManyWithWhereWithoutDroneInput[]
    deleteMany?: DetectionScalarWhereInput | DetectionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRoutesInput = {
    create?: XOR<UserCreateWithoutRoutesInput, UserUncheckedCreateWithoutRoutesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoutesInput
    connect?: UserWhereUniqueInput
  }

  export type DroneCreateNestedOneWithoutRoutesInput = {
    create?: XOR<DroneCreateWithoutRoutesInput, DroneUncheckedCreateWithoutRoutesInput>
    connectOrCreate?: DroneCreateOrConnectWithoutRoutesInput
    connect?: DroneWhereUniqueInput
  }

  export type FlightHistoryCreateNestedManyWithoutRouteInput = {
    create?: XOR<FlightHistoryCreateWithoutRouteInput, FlightHistoryUncheckedCreateWithoutRouteInput> | FlightHistoryCreateWithoutRouteInput[] | FlightHistoryUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: FlightHistoryCreateOrConnectWithoutRouteInput | FlightHistoryCreateOrConnectWithoutRouteInput[]
    createMany?: FlightHistoryCreateManyRouteInputEnvelope
    connect?: FlightHistoryWhereUniqueInput | FlightHistoryWhereUniqueInput[]
  }

  export type FlightHistoryUncheckedCreateNestedManyWithoutRouteInput = {
    create?: XOR<FlightHistoryCreateWithoutRouteInput, FlightHistoryUncheckedCreateWithoutRouteInput> | FlightHistoryCreateWithoutRouteInput[] | FlightHistoryUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: FlightHistoryCreateOrConnectWithoutRouteInput | FlightHistoryCreateOrConnectWithoutRouteInput[]
    createMany?: FlightHistoryCreateManyRouteInputEnvelope
    connect?: FlightHistoryWhereUniqueInput | FlightHistoryWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutRoutesNestedInput = {
    create?: XOR<UserCreateWithoutRoutesInput, UserUncheckedCreateWithoutRoutesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoutesInput
    upsert?: UserUpsertWithoutRoutesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRoutesInput, UserUpdateWithoutRoutesInput>, UserUncheckedUpdateWithoutRoutesInput>
  }

  export type DroneUpdateOneWithoutRoutesNestedInput = {
    create?: XOR<DroneCreateWithoutRoutesInput, DroneUncheckedCreateWithoutRoutesInput>
    connectOrCreate?: DroneCreateOrConnectWithoutRoutesInput
    upsert?: DroneUpsertWithoutRoutesInput
    disconnect?: DroneWhereInput | boolean
    delete?: DroneWhereInput | boolean
    connect?: DroneWhereUniqueInput
    update?: XOR<XOR<DroneUpdateToOneWithWhereWithoutRoutesInput, DroneUpdateWithoutRoutesInput>, DroneUncheckedUpdateWithoutRoutesInput>
  }

  export type FlightHistoryUpdateManyWithoutRouteNestedInput = {
    create?: XOR<FlightHistoryCreateWithoutRouteInput, FlightHistoryUncheckedCreateWithoutRouteInput> | FlightHistoryCreateWithoutRouteInput[] | FlightHistoryUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: FlightHistoryCreateOrConnectWithoutRouteInput | FlightHistoryCreateOrConnectWithoutRouteInput[]
    upsert?: FlightHistoryUpsertWithWhereUniqueWithoutRouteInput | FlightHistoryUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: FlightHistoryCreateManyRouteInputEnvelope
    set?: FlightHistoryWhereUniqueInput | FlightHistoryWhereUniqueInput[]
    disconnect?: FlightHistoryWhereUniqueInput | FlightHistoryWhereUniqueInput[]
    delete?: FlightHistoryWhereUniqueInput | FlightHistoryWhereUniqueInput[]
    connect?: FlightHistoryWhereUniqueInput | FlightHistoryWhereUniqueInput[]
    update?: FlightHistoryUpdateWithWhereUniqueWithoutRouteInput | FlightHistoryUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: FlightHistoryUpdateManyWithWhereWithoutRouteInput | FlightHistoryUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: FlightHistoryScalarWhereInput | FlightHistoryScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FlightHistoryUncheckedUpdateManyWithoutRouteNestedInput = {
    create?: XOR<FlightHistoryCreateWithoutRouteInput, FlightHistoryUncheckedCreateWithoutRouteInput> | FlightHistoryCreateWithoutRouteInput[] | FlightHistoryUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: FlightHistoryCreateOrConnectWithoutRouteInput | FlightHistoryCreateOrConnectWithoutRouteInput[]
    upsert?: FlightHistoryUpsertWithWhereUniqueWithoutRouteInput | FlightHistoryUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: FlightHistoryCreateManyRouteInputEnvelope
    set?: FlightHistoryWhereUniqueInput | FlightHistoryWhereUniqueInput[]
    disconnect?: FlightHistoryWhereUniqueInput | FlightHistoryWhereUniqueInput[]
    delete?: FlightHistoryWhereUniqueInput | FlightHistoryWhereUniqueInput[]
    connect?: FlightHistoryWhereUniqueInput | FlightHistoryWhereUniqueInput[]
    update?: FlightHistoryUpdateWithWhereUniqueWithoutRouteInput | FlightHistoryUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: FlightHistoryUpdateManyWithWhereWithoutRouteInput | FlightHistoryUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: FlightHistoryScalarWhereInput | FlightHistoryScalarWhereInput[]
  }

  export type DroneCreateNestedOneWithoutFlightHistoryInput = {
    create?: XOR<DroneCreateWithoutFlightHistoryInput, DroneUncheckedCreateWithoutFlightHistoryInput>
    connectOrCreate?: DroneCreateOrConnectWithoutFlightHistoryInput
    connect?: DroneWhereUniqueInput
  }

  export type RouteCreateNestedOneWithoutFlightsInput = {
    create?: XOR<RouteCreateWithoutFlightsInput, RouteUncheckedCreateWithoutFlightsInput>
    connectOrCreate?: RouteCreateOrConnectWithoutFlightsInput
    connect?: RouteWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFlightHistoryInput = {
    create?: XOR<UserCreateWithoutFlightHistoryInput, UserUncheckedCreateWithoutFlightHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutFlightHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type DroneUpdateOneRequiredWithoutFlightHistoryNestedInput = {
    create?: XOR<DroneCreateWithoutFlightHistoryInput, DroneUncheckedCreateWithoutFlightHistoryInput>
    connectOrCreate?: DroneCreateOrConnectWithoutFlightHistoryInput
    upsert?: DroneUpsertWithoutFlightHistoryInput
    connect?: DroneWhereUniqueInput
    update?: XOR<XOR<DroneUpdateToOneWithWhereWithoutFlightHistoryInput, DroneUpdateWithoutFlightHistoryInput>, DroneUncheckedUpdateWithoutFlightHistoryInput>
  }

  export type RouteUpdateOneWithoutFlightsNestedInput = {
    create?: XOR<RouteCreateWithoutFlightsInput, RouteUncheckedCreateWithoutFlightsInput>
    connectOrCreate?: RouteCreateOrConnectWithoutFlightsInput
    upsert?: RouteUpsertWithoutFlightsInput
    disconnect?: RouteWhereInput | boolean
    delete?: RouteWhereInput | boolean
    connect?: RouteWhereUniqueInput
    update?: XOR<XOR<RouteUpdateToOneWithWhereWithoutFlightsInput, RouteUpdateWithoutFlightsInput>, RouteUncheckedUpdateWithoutFlightsInput>
  }

  export type UserUpdateOneRequiredWithoutFlightHistoryNestedInput = {
    create?: XOR<UserCreateWithoutFlightHistoryInput, UserUncheckedCreateWithoutFlightHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutFlightHistoryInput
    upsert?: UserUpsertWithoutFlightHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFlightHistoryInput, UserUpdateWithoutFlightHistoryInput>, UserUncheckedUpdateWithoutFlightHistoryInput>
  }

  export type DroneCreateNestedOneWithoutEventsInput = {
    create?: XOR<DroneCreateWithoutEventsInput, DroneUncheckedCreateWithoutEventsInput>
    connectOrCreate?: DroneCreateOrConnectWithoutEventsInput
    connect?: DroneWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEventsInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.EventType
  }

  export type EnumSeverityFieldUpdateOperationsInput = {
    set?: $Enums.Severity
  }

  export type DroneUpdateOneWithoutEventsNestedInput = {
    create?: XOR<DroneCreateWithoutEventsInput, DroneUncheckedCreateWithoutEventsInput>
    connectOrCreate?: DroneCreateOrConnectWithoutEventsInput
    upsert?: DroneUpsertWithoutEventsInput
    disconnect?: DroneWhereInput | boolean
    delete?: DroneWhereInput | boolean
    connect?: DroneWhereUniqueInput
    update?: XOR<XOR<DroneUpdateToOneWithWhereWithoutEventsInput, DroneUpdateWithoutEventsInput>, DroneUncheckedUpdateWithoutEventsInput>
  }

  export type UserUpdateOneWithoutEventsNestedInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput
    upsert?: UserUpsertWithoutEventsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEventsInput, UserUpdateWithoutEventsInput>, UserUncheckedUpdateWithoutEventsInput>
  }

  export type DroneCreateNestedOneWithoutDetectionsInput = {
    create?: XOR<DroneCreateWithoutDetectionsInput, DroneUncheckedCreateWithoutDetectionsInput>
    connectOrCreate?: DroneCreateOrConnectWithoutDetectionsInput
    connect?: DroneWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DroneUpdateOneRequiredWithoutDetectionsNestedInput = {
    create?: XOR<DroneCreateWithoutDetectionsInput, DroneUncheckedCreateWithoutDetectionsInput>
    connectOrCreate?: DroneCreateOrConnectWithoutDetectionsInput
    upsert?: DroneUpsertWithoutDetectionsInput
    connect?: DroneWhereUniqueInput
    update?: XOR<XOR<DroneUpdateToOneWithWhereWithoutDetectionsInput, DroneUpdateWithoutDetectionsInput>, DroneUncheckedUpdateWithoutDetectionsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumDroneStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DroneStatus | EnumDroneStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DroneStatus[]
    notIn?: $Enums.DroneStatus[]
    not?: NestedEnumDroneStatusFilter<$PrismaModel> | $Enums.DroneStatus
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumDroneStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DroneStatus | EnumDroneStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DroneStatus[]
    notIn?: $Enums.DroneStatus[]
    not?: NestedEnumDroneStatusWithAggregatesFilter<$PrismaModel> | $Enums.DroneStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDroneStatusFilter<$PrismaModel>
    _max?: NestedEnumDroneStatusFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[]
    notIn?: $Enums.EventType[]
    not?: NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType
  }

  export type NestedEnumSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[]
    notIn?: $Enums.Severity[]
    not?: NestedEnumSeverityFilter<$PrismaModel> | $Enums.Severity
  }

  export type NestedEnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[]
    notIn?: $Enums.EventType[]
    not?: NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventTypeFilter<$PrismaModel>
    _max?: NestedEnumEventTypeFilter<$PrismaModel>
  }

  export type NestedEnumSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[]
    notIn?: $Enums.Severity[]
    not?: NestedEnumSeverityWithAggregatesFilter<$PrismaModel> | $Enums.Severity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeverityFilter<$PrismaModel>
    _max?: NestedEnumSeverityFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserCreateWithoutRoleInput = {
    username: string
    email: string
    passwordHash: string
    fullName?: string | null
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    drones?: DroneCreateNestedManyWithoutOwnerInput
    routes?: RouteCreateNestedManyWithoutUserInput
    flightHistory?: FlightHistoryCreateNestedManyWithoutPilotInput
    events?: EventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: number
    username: string
    email: string
    passwordHash: string
    fullName?: string | null
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    drones?: DroneUncheckedCreateNestedManyWithoutOwnerInput
    routes?: RouteUncheckedCreateNestedManyWithoutUserInput
    flightHistory?: FlightHistoryUncheckedCreateNestedManyWithoutPilotInput
    events?: EventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    fullName?: StringNullableFilter<"User"> | string | null
    roleId?: IntFilter<"User"> | number
    isActive?: BoolFilter<"User"> | boolean
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type RoleCreateWithoutUsersInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type DroneCreateWithoutOwnerInput = {
    name: string
    model: string
    serialNumber: string
    status?: $Enums.DroneStatus
    batteryLevel?: number
    latitude?: number | null
    longitude?: number | null
    altitude?: number | null
    speed?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    routes?: RouteCreateNestedManyWithoutDroneInput
    flightHistory?: FlightHistoryCreateNestedManyWithoutDroneInput
    events?: EventCreateNestedManyWithoutDroneInput
    detections?: DetectionCreateNestedManyWithoutDroneInput
  }

  export type DroneUncheckedCreateWithoutOwnerInput = {
    id?: number
    name: string
    model: string
    serialNumber: string
    status?: $Enums.DroneStatus
    batteryLevel?: number
    latitude?: number | null
    longitude?: number | null
    altitude?: number | null
    speed?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    routes?: RouteUncheckedCreateNestedManyWithoutDroneInput
    flightHistory?: FlightHistoryUncheckedCreateNestedManyWithoutDroneInput
    events?: EventUncheckedCreateNestedManyWithoutDroneInput
    detections?: DetectionUncheckedCreateNestedManyWithoutDroneInput
  }

  export type DroneCreateOrConnectWithoutOwnerInput = {
    where: DroneWhereUniqueInput
    create: XOR<DroneCreateWithoutOwnerInput, DroneUncheckedCreateWithoutOwnerInput>
  }

  export type DroneCreateManyOwnerInputEnvelope = {
    data: DroneCreateManyOwnerInput | DroneCreateManyOwnerInput[]
  }

  export type RouteCreateWithoutUserInput = {
    name: string
    description?: string | null
    coordinates: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    drone?: DroneCreateNestedOneWithoutRoutesInput
    flights?: FlightHistoryCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    description?: string | null
    coordinates: JsonNullValueInput | InputJsonValue
    droneId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flights?: FlightHistoryUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteCreateOrConnectWithoutUserInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutUserInput, RouteUncheckedCreateWithoutUserInput>
  }

  export type RouteCreateManyUserInputEnvelope = {
    data: RouteCreateManyUserInput | RouteCreateManyUserInput[]
  }

  export type FlightHistoryCreateWithoutPilotInput = {
    startTime: Date | string
    endTime?: Date | string | null
    distance?: number | null
    maxAltitude?: number | null
    maxSpeed?: number | null
    telemetry?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    drone: DroneCreateNestedOneWithoutFlightHistoryInput
    route?: RouteCreateNestedOneWithoutFlightsInput
  }

  export type FlightHistoryUncheckedCreateWithoutPilotInput = {
    id?: number
    droneId: number
    routeId?: number | null
    startTime: Date | string
    endTime?: Date | string | null
    distance?: number | null
    maxAltitude?: number | null
    maxSpeed?: number | null
    telemetry?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlightHistoryCreateOrConnectWithoutPilotInput = {
    where: FlightHistoryWhereUniqueInput
    create: XOR<FlightHistoryCreateWithoutPilotInput, FlightHistoryUncheckedCreateWithoutPilotInput>
  }

  export type FlightHistoryCreateManyPilotInputEnvelope = {
    data: FlightHistoryCreateManyPilotInput | FlightHistoryCreateManyPilotInput[]
  }

  export type EventCreateWithoutUserInput = {
    type: $Enums.EventType
    message: string
    severity: $Enums.Severity
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    drone?: DroneCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutUserInput = {
    id?: number
    type: $Enums.EventType
    message: string
    severity: $Enums.Severity
    read?: boolean
    droneId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventCreateOrConnectWithoutUserInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput>
  }

  export type EventCreateManyUserInputEnvelope = {
    data: EventCreateManyUserInput | EventCreateManyUserInput[]
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DroneUpsertWithWhereUniqueWithoutOwnerInput = {
    where: DroneWhereUniqueInput
    update: XOR<DroneUpdateWithoutOwnerInput, DroneUncheckedUpdateWithoutOwnerInput>
    create: XOR<DroneCreateWithoutOwnerInput, DroneUncheckedCreateWithoutOwnerInput>
  }

  export type DroneUpdateWithWhereUniqueWithoutOwnerInput = {
    where: DroneWhereUniqueInput
    data: XOR<DroneUpdateWithoutOwnerInput, DroneUncheckedUpdateWithoutOwnerInput>
  }

  export type DroneUpdateManyWithWhereWithoutOwnerInput = {
    where: DroneScalarWhereInput
    data: XOR<DroneUpdateManyMutationInput, DroneUncheckedUpdateManyWithoutOwnerInput>
  }

  export type DroneScalarWhereInput = {
    AND?: DroneScalarWhereInput | DroneScalarWhereInput[]
    OR?: DroneScalarWhereInput[]
    NOT?: DroneScalarWhereInput | DroneScalarWhereInput[]
    id?: IntFilter<"Drone"> | number
    name?: StringFilter<"Drone"> | string
    model?: StringFilter<"Drone"> | string
    serialNumber?: StringFilter<"Drone"> | string
    status?: EnumDroneStatusFilter<"Drone"> | $Enums.DroneStatus
    batteryLevel?: IntFilter<"Drone"> | number
    latitude?: FloatNullableFilter<"Drone"> | number | null
    longitude?: FloatNullableFilter<"Drone"> | number | null
    altitude?: FloatNullableFilter<"Drone"> | number | null
    speed?: FloatNullableFilter<"Drone"> | number | null
    ownerId?: IntFilter<"Drone"> | number
    createdAt?: DateTimeFilter<"Drone"> | Date | string
    updatedAt?: DateTimeFilter<"Drone"> | Date | string
  }

  export type RouteUpsertWithWhereUniqueWithoutUserInput = {
    where: RouteWhereUniqueInput
    update: XOR<RouteUpdateWithoutUserInput, RouteUncheckedUpdateWithoutUserInput>
    create: XOR<RouteCreateWithoutUserInput, RouteUncheckedCreateWithoutUserInput>
  }

  export type RouteUpdateWithWhereUniqueWithoutUserInput = {
    where: RouteWhereUniqueInput
    data: XOR<RouteUpdateWithoutUserInput, RouteUncheckedUpdateWithoutUserInput>
  }

  export type RouteUpdateManyWithWhereWithoutUserInput = {
    where: RouteScalarWhereInput
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyWithoutUserInput>
  }

  export type RouteScalarWhereInput = {
    AND?: RouteScalarWhereInput | RouteScalarWhereInput[]
    OR?: RouteScalarWhereInput[]
    NOT?: RouteScalarWhereInput | RouteScalarWhereInput[]
    id?: IntFilter<"Route"> | number
    name?: StringFilter<"Route"> | string
    description?: StringNullableFilter<"Route"> | string | null
    coordinates?: JsonFilter<"Route">
    createdBy?: IntFilter<"Route"> | number
    droneId?: IntNullableFilter<"Route"> | number | null
    createdAt?: DateTimeFilter<"Route"> | Date | string
    updatedAt?: DateTimeFilter<"Route"> | Date | string
  }

  export type FlightHistoryUpsertWithWhereUniqueWithoutPilotInput = {
    where: FlightHistoryWhereUniqueInput
    update: XOR<FlightHistoryUpdateWithoutPilotInput, FlightHistoryUncheckedUpdateWithoutPilotInput>
    create: XOR<FlightHistoryCreateWithoutPilotInput, FlightHistoryUncheckedCreateWithoutPilotInput>
  }

  export type FlightHistoryUpdateWithWhereUniqueWithoutPilotInput = {
    where: FlightHistoryWhereUniqueInput
    data: XOR<FlightHistoryUpdateWithoutPilotInput, FlightHistoryUncheckedUpdateWithoutPilotInput>
  }

  export type FlightHistoryUpdateManyWithWhereWithoutPilotInput = {
    where: FlightHistoryScalarWhereInput
    data: XOR<FlightHistoryUpdateManyMutationInput, FlightHistoryUncheckedUpdateManyWithoutPilotInput>
  }

  export type FlightHistoryScalarWhereInput = {
    AND?: FlightHistoryScalarWhereInput | FlightHistoryScalarWhereInput[]
    OR?: FlightHistoryScalarWhereInput[]
    NOT?: FlightHistoryScalarWhereInput | FlightHistoryScalarWhereInput[]
    id?: IntFilter<"FlightHistory"> | number
    droneId?: IntFilter<"FlightHistory"> | number
    routeId?: IntNullableFilter<"FlightHistory"> | number | null
    pilotId?: IntFilter<"FlightHistory"> | number
    startTime?: DateTimeFilter<"FlightHistory"> | Date | string
    endTime?: DateTimeNullableFilter<"FlightHistory"> | Date | string | null
    distance?: FloatNullableFilter<"FlightHistory"> | number | null
    maxAltitude?: FloatNullableFilter<"FlightHistory"> | number | null
    maxSpeed?: FloatNullableFilter<"FlightHistory"> | number | null
    telemetry?: JsonNullableFilter<"FlightHistory">
    createdAt?: DateTimeFilter<"FlightHistory"> | Date | string
    updatedAt?: DateTimeFilter<"FlightHistory"> | Date | string
  }

  export type EventUpsertWithWhereUniqueWithoutUserInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutUserInput, EventUncheckedUpdateWithoutUserInput>
    create: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput>
  }

  export type EventUpdateWithWhereUniqueWithoutUserInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutUserInput, EventUncheckedUpdateWithoutUserInput>
  }

  export type EventUpdateManyWithWhereWithoutUserInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutUserInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: IntFilter<"Event"> | number
    type?: EnumEventTypeFilter<"Event"> | $Enums.EventType
    message?: StringFilter<"Event"> | string
    severity?: EnumSeverityFilter<"Event"> | $Enums.Severity
    read?: BoolFilter<"Event"> | boolean
    droneId?: IntNullableFilter<"Event"> | number | null
    userId?: IntNullableFilter<"Event"> | number | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
  }

  export type UserCreateWithoutDronesInput = {
    username: string
    email: string
    passwordHash: string
    fullName?: string | null
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    routes?: RouteCreateNestedManyWithoutUserInput
    flightHistory?: FlightHistoryCreateNestedManyWithoutPilotInput
    events?: EventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDronesInput = {
    id?: number
    username: string
    email: string
    passwordHash: string
    fullName?: string | null
    roleId: number
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    routes?: RouteUncheckedCreateNestedManyWithoutUserInput
    flightHistory?: FlightHistoryUncheckedCreateNestedManyWithoutPilotInput
    events?: EventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDronesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDronesInput, UserUncheckedCreateWithoutDronesInput>
  }

  export type RouteCreateWithoutDroneInput = {
    name: string
    description?: string | null
    coordinates: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRoutesInput
    flights?: FlightHistoryCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateWithoutDroneInput = {
    id?: number
    name: string
    description?: string | null
    coordinates: JsonNullValueInput | InputJsonValue
    createdBy: number
    createdAt?: Date | string
    updatedAt?: Date | string
    flights?: FlightHistoryUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteCreateOrConnectWithoutDroneInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutDroneInput, RouteUncheckedCreateWithoutDroneInput>
  }

  export type RouteCreateManyDroneInputEnvelope = {
    data: RouteCreateManyDroneInput | RouteCreateManyDroneInput[]
  }

  export type FlightHistoryCreateWithoutDroneInput = {
    startTime: Date | string
    endTime?: Date | string | null
    distance?: number | null
    maxAltitude?: number | null
    maxSpeed?: number | null
    telemetry?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    route?: RouteCreateNestedOneWithoutFlightsInput
    pilot: UserCreateNestedOneWithoutFlightHistoryInput
  }

  export type FlightHistoryUncheckedCreateWithoutDroneInput = {
    id?: number
    routeId?: number | null
    pilotId: number
    startTime: Date | string
    endTime?: Date | string | null
    distance?: number | null
    maxAltitude?: number | null
    maxSpeed?: number | null
    telemetry?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlightHistoryCreateOrConnectWithoutDroneInput = {
    where: FlightHistoryWhereUniqueInput
    create: XOR<FlightHistoryCreateWithoutDroneInput, FlightHistoryUncheckedCreateWithoutDroneInput>
  }

  export type FlightHistoryCreateManyDroneInputEnvelope = {
    data: FlightHistoryCreateManyDroneInput | FlightHistoryCreateManyDroneInput[]
  }

  export type EventCreateWithoutDroneInput = {
    type: $Enums.EventType
    message: string
    severity: $Enums.Severity
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutDroneInput = {
    id?: number
    type: $Enums.EventType
    message: string
    severity: $Enums.Severity
    read?: boolean
    userId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventCreateOrConnectWithoutDroneInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutDroneInput, EventUncheckedCreateWithoutDroneInput>
  }

  export type EventCreateManyDroneInputEnvelope = {
    data: EventCreateManyDroneInput | EventCreateManyDroneInput[]
  }

  export type DetectionCreateWithoutDroneInput = {
    objectType: string
    confidence: number
    coordinates: JsonNullValueInput | InputJsonValue
    timestamp: Date | string
    imageUrl?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DetectionUncheckedCreateWithoutDroneInput = {
    id?: number
    objectType: string
    confidence: number
    coordinates: JsonNullValueInput | InputJsonValue
    timestamp: Date | string
    imageUrl?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DetectionCreateOrConnectWithoutDroneInput = {
    where: DetectionWhereUniqueInput
    create: XOR<DetectionCreateWithoutDroneInput, DetectionUncheckedCreateWithoutDroneInput>
  }

  export type DetectionCreateManyDroneInputEnvelope = {
    data: DetectionCreateManyDroneInput | DetectionCreateManyDroneInput[]
  }

  export type UserUpsertWithoutDronesInput = {
    update: XOR<UserUpdateWithoutDronesInput, UserUncheckedUpdateWithoutDronesInput>
    create: XOR<UserCreateWithoutDronesInput, UserUncheckedCreateWithoutDronesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDronesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDronesInput, UserUncheckedUpdateWithoutDronesInput>
  }

  export type UserUpdateWithoutDronesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    routes?: RouteUpdateManyWithoutUserNestedInput
    flightHistory?: FlightHistoryUpdateManyWithoutPilotNestedInput
    events?: EventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDronesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routes?: RouteUncheckedUpdateManyWithoutUserNestedInput
    flightHistory?: FlightHistoryUncheckedUpdateManyWithoutPilotNestedInput
    events?: EventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RouteUpsertWithWhereUniqueWithoutDroneInput = {
    where: RouteWhereUniqueInput
    update: XOR<RouteUpdateWithoutDroneInput, RouteUncheckedUpdateWithoutDroneInput>
    create: XOR<RouteCreateWithoutDroneInput, RouteUncheckedCreateWithoutDroneInput>
  }

  export type RouteUpdateWithWhereUniqueWithoutDroneInput = {
    where: RouteWhereUniqueInput
    data: XOR<RouteUpdateWithoutDroneInput, RouteUncheckedUpdateWithoutDroneInput>
  }

  export type RouteUpdateManyWithWhereWithoutDroneInput = {
    where: RouteScalarWhereInput
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyWithoutDroneInput>
  }

  export type FlightHistoryUpsertWithWhereUniqueWithoutDroneInput = {
    where: FlightHistoryWhereUniqueInput
    update: XOR<FlightHistoryUpdateWithoutDroneInput, FlightHistoryUncheckedUpdateWithoutDroneInput>
    create: XOR<FlightHistoryCreateWithoutDroneInput, FlightHistoryUncheckedCreateWithoutDroneInput>
  }

  export type FlightHistoryUpdateWithWhereUniqueWithoutDroneInput = {
    where: FlightHistoryWhereUniqueInput
    data: XOR<FlightHistoryUpdateWithoutDroneInput, FlightHistoryUncheckedUpdateWithoutDroneInput>
  }

  export type FlightHistoryUpdateManyWithWhereWithoutDroneInput = {
    where: FlightHistoryScalarWhereInput
    data: XOR<FlightHistoryUpdateManyMutationInput, FlightHistoryUncheckedUpdateManyWithoutDroneInput>
  }

  export type EventUpsertWithWhereUniqueWithoutDroneInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutDroneInput, EventUncheckedUpdateWithoutDroneInput>
    create: XOR<EventCreateWithoutDroneInput, EventUncheckedCreateWithoutDroneInput>
  }

  export type EventUpdateWithWhereUniqueWithoutDroneInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutDroneInput, EventUncheckedUpdateWithoutDroneInput>
  }

  export type EventUpdateManyWithWhereWithoutDroneInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutDroneInput>
  }

  export type DetectionUpsertWithWhereUniqueWithoutDroneInput = {
    where: DetectionWhereUniqueInput
    update: XOR<DetectionUpdateWithoutDroneInput, DetectionUncheckedUpdateWithoutDroneInput>
    create: XOR<DetectionCreateWithoutDroneInput, DetectionUncheckedCreateWithoutDroneInput>
  }

  export type DetectionUpdateWithWhereUniqueWithoutDroneInput = {
    where: DetectionWhereUniqueInput
    data: XOR<DetectionUpdateWithoutDroneInput, DetectionUncheckedUpdateWithoutDroneInput>
  }

  export type DetectionUpdateManyWithWhereWithoutDroneInput = {
    where: DetectionScalarWhereInput
    data: XOR<DetectionUpdateManyMutationInput, DetectionUncheckedUpdateManyWithoutDroneInput>
  }

  export type DetectionScalarWhereInput = {
    AND?: DetectionScalarWhereInput | DetectionScalarWhereInput[]
    OR?: DetectionScalarWhereInput[]
    NOT?: DetectionScalarWhereInput | DetectionScalarWhereInput[]
    id?: IntFilter<"Detection"> | number
    droneId?: IntFilter<"Detection"> | number
    objectType?: StringFilter<"Detection"> | string
    confidence?: FloatFilter<"Detection"> | number
    coordinates?: JsonFilter<"Detection">
    timestamp?: DateTimeFilter<"Detection"> | Date | string
    imageUrl?: StringNullableFilter<"Detection"> | string | null
    metadata?: JsonNullableFilter<"Detection">
    createdAt?: DateTimeFilter<"Detection"> | Date | string
    updatedAt?: DateTimeFilter<"Detection"> | Date | string
  }

  export type UserCreateWithoutRoutesInput = {
    username: string
    email: string
    passwordHash: string
    fullName?: string | null
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    drones?: DroneCreateNestedManyWithoutOwnerInput
    flightHistory?: FlightHistoryCreateNestedManyWithoutPilotInput
    events?: EventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoutesInput = {
    id?: number
    username: string
    email: string
    passwordHash: string
    fullName?: string | null
    roleId: number
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    drones?: DroneUncheckedCreateNestedManyWithoutOwnerInput
    flightHistory?: FlightHistoryUncheckedCreateNestedManyWithoutPilotInput
    events?: EventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoutesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoutesInput, UserUncheckedCreateWithoutRoutesInput>
  }

  export type DroneCreateWithoutRoutesInput = {
    name: string
    model: string
    serialNumber: string
    status?: $Enums.DroneStatus
    batteryLevel?: number
    latitude?: number | null
    longitude?: number | null
    altitude?: number | null
    speed?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutDronesInput
    flightHistory?: FlightHistoryCreateNestedManyWithoutDroneInput
    events?: EventCreateNestedManyWithoutDroneInput
    detections?: DetectionCreateNestedManyWithoutDroneInput
  }

  export type DroneUncheckedCreateWithoutRoutesInput = {
    id?: number
    name: string
    model: string
    serialNumber: string
    status?: $Enums.DroneStatus
    batteryLevel?: number
    latitude?: number | null
    longitude?: number | null
    altitude?: number | null
    speed?: number | null
    ownerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    flightHistory?: FlightHistoryUncheckedCreateNestedManyWithoutDroneInput
    events?: EventUncheckedCreateNestedManyWithoutDroneInput
    detections?: DetectionUncheckedCreateNestedManyWithoutDroneInput
  }

  export type DroneCreateOrConnectWithoutRoutesInput = {
    where: DroneWhereUniqueInput
    create: XOR<DroneCreateWithoutRoutesInput, DroneUncheckedCreateWithoutRoutesInput>
  }

  export type FlightHistoryCreateWithoutRouteInput = {
    startTime: Date | string
    endTime?: Date | string | null
    distance?: number | null
    maxAltitude?: number | null
    maxSpeed?: number | null
    telemetry?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    drone: DroneCreateNestedOneWithoutFlightHistoryInput
    pilot: UserCreateNestedOneWithoutFlightHistoryInput
  }

  export type FlightHistoryUncheckedCreateWithoutRouteInput = {
    id?: number
    droneId: number
    pilotId: number
    startTime: Date | string
    endTime?: Date | string | null
    distance?: number | null
    maxAltitude?: number | null
    maxSpeed?: number | null
    telemetry?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlightHistoryCreateOrConnectWithoutRouteInput = {
    where: FlightHistoryWhereUniqueInput
    create: XOR<FlightHistoryCreateWithoutRouteInput, FlightHistoryUncheckedCreateWithoutRouteInput>
  }

  export type FlightHistoryCreateManyRouteInputEnvelope = {
    data: FlightHistoryCreateManyRouteInput | FlightHistoryCreateManyRouteInput[]
  }

  export type UserUpsertWithoutRoutesInput = {
    update: XOR<UserUpdateWithoutRoutesInput, UserUncheckedUpdateWithoutRoutesInput>
    create: XOR<UserCreateWithoutRoutesInput, UserUncheckedCreateWithoutRoutesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRoutesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRoutesInput, UserUncheckedUpdateWithoutRoutesInput>
  }

  export type UserUpdateWithoutRoutesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    drones?: DroneUpdateManyWithoutOwnerNestedInput
    flightHistory?: FlightHistoryUpdateManyWithoutPilotNestedInput
    events?: EventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoutesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drones?: DroneUncheckedUpdateManyWithoutOwnerNestedInput
    flightHistory?: FlightHistoryUncheckedUpdateManyWithoutPilotNestedInput
    events?: EventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DroneUpsertWithoutRoutesInput = {
    update: XOR<DroneUpdateWithoutRoutesInput, DroneUncheckedUpdateWithoutRoutesInput>
    create: XOR<DroneCreateWithoutRoutesInput, DroneUncheckedCreateWithoutRoutesInput>
    where?: DroneWhereInput
  }

  export type DroneUpdateToOneWithWhereWithoutRoutesInput = {
    where?: DroneWhereInput
    data: XOR<DroneUpdateWithoutRoutesInput, DroneUncheckedUpdateWithoutRoutesInput>
  }

  export type DroneUpdateWithoutRoutesInput = {
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumDroneStatusFieldUpdateOperationsInput | $Enums.DroneStatus
    batteryLevel?: IntFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    speed?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutDronesNestedInput
    flightHistory?: FlightHistoryUpdateManyWithoutDroneNestedInput
    events?: EventUpdateManyWithoutDroneNestedInput
    detections?: DetectionUpdateManyWithoutDroneNestedInput
  }

  export type DroneUncheckedUpdateWithoutRoutesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumDroneStatusFieldUpdateOperationsInput | $Enums.DroneStatus
    batteryLevel?: IntFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    speed?: NullableFloatFieldUpdateOperationsInput | number | null
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flightHistory?: FlightHistoryUncheckedUpdateManyWithoutDroneNestedInput
    events?: EventUncheckedUpdateManyWithoutDroneNestedInput
    detections?: DetectionUncheckedUpdateManyWithoutDroneNestedInput
  }

  export type FlightHistoryUpsertWithWhereUniqueWithoutRouteInput = {
    where: FlightHistoryWhereUniqueInput
    update: XOR<FlightHistoryUpdateWithoutRouteInput, FlightHistoryUncheckedUpdateWithoutRouteInput>
    create: XOR<FlightHistoryCreateWithoutRouteInput, FlightHistoryUncheckedCreateWithoutRouteInput>
  }

  export type FlightHistoryUpdateWithWhereUniqueWithoutRouteInput = {
    where: FlightHistoryWhereUniqueInput
    data: XOR<FlightHistoryUpdateWithoutRouteInput, FlightHistoryUncheckedUpdateWithoutRouteInput>
  }

  export type FlightHistoryUpdateManyWithWhereWithoutRouteInput = {
    where: FlightHistoryScalarWhereInput
    data: XOR<FlightHistoryUpdateManyMutationInput, FlightHistoryUncheckedUpdateManyWithoutRouteInput>
  }

  export type DroneCreateWithoutFlightHistoryInput = {
    name: string
    model: string
    serialNumber: string
    status?: $Enums.DroneStatus
    batteryLevel?: number
    latitude?: number | null
    longitude?: number | null
    altitude?: number | null
    speed?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutDronesInput
    routes?: RouteCreateNestedManyWithoutDroneInput
    events?: EventCreateNestedManyWithoutDroneInput
    detections?: DetectionCreateNestedManyWithoutDroneInput
  }

  export type DroneUncheckedCreateWithoutFlightHistoryInput = {
    id?: number
    name: string
    model: string
    serialNumber: string
    status?: $Enums.DroneStatus
    batteryLevel?: number
    latitude?: number | null
    longitude?: number | null
    altitude?: number | null
    speed?: number | null
    ownerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    routes?: RouteUncheckedCreateNestedManyWithoutDroneInput
    events?: EventUncheckedCreateNestedManyWithoutDroneInput
    detections?: DetectionUncheckedCreateNestedManyWithoutDroneInput
  }

  export type DroneCreateOrConnectWithoutFlightHistoryInput = {
    where: DroneWhereUniqueInput
    create: XOR<DroneCreateWithoutFlightHistoryInput, DroneUncheckedCreateWithoutFlightHistoryInput>
  }

  export type RouteCreateWithoutFlightsInput = {
    name: string
    description?: string | null
    coordinates: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRoutesInput
    drone?: DroneCreateNestedOneWithoutRoutesInput
  }

  export type RouteUncheckedCreateWithoutFlightsInput = {
    id?: number
    name: string
    description?: string | null
    coordinates: JsonNullValueInput | InputJsonValue
    createdBy: number
    droneId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RouteCreateOrConnectWithoutFlightsInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutFlightsInput, RouteUncheckedCreateWithoutFlightsInput>
  }

  export type UserCreateWithoutFlightHistoryInput = {
    username: string
    email: string
    passwordHash: string
    fullName?: string | null
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    drones?: DroneCreateNestedManyWithoutOwnerInput
    routes?: RouteCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFlightHistoryInput = {
    id?: number
    username: string
    email: string
    passwordHash: string
    fullName?: string | null
    roleId: number
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    drones?: DroneUncheckedCreateNestedManyWithoutOwnerInput
    routes?: RouteUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFlightHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFlightHistoryInput, UserUncheckedCreateWithoutFlightHistoryInput>
  }

  export type DroneUpsertWithoutFlightHistoryInput = {
    update: XOR<DroneUpdateWithoutFlightHistoryInput, DroneUncheckedUpdateWithoutFlightHistoryInput>
    create: XOR<DroneCreateWithoutFlightHistoryInput, DroneUncheckedCreateWithoutFlightHistoryInput>
    where?: DroneWhereInput
  }

  export type DroneUpdateToOneWithWhereWithoutFlightHistoryInput = {
    where?: DroneWhereInput
    data: XOR<DroneUpdateWithoutFlightHistoryInput, DroneUncheckedUpdateWithoutFlightHistoryInput>
  }

  export type DroneUpdateWithoutFlightHistoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumDroneStatusFieldUpdateOperationsInput | $Enums.DroneStatus
    batteryLevel?: IntFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    speed?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutDronesNestedInput
    routes?: RouteUpdateManyWithoutDroneNestedInput
    events?: EventUpdateManyWithoutDroneNestedInput
    detections?: DetectionUpdateManyWithoutDroneNestedInput
  }

  export type DroneUncheckedUpdateWithoutFlightHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumDroneStatusFieldUpdateOperationsInput | $Enums.DroneStatus
    batteryLevel?: IntFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    speed?: NullableFloatFieldUpdateOperationsInput | number | null
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routes?: RouteUncheckedUpdateManyWithoutDroneNestedInput
    events?: EventUncheckedUpdateManyWithoutDroneNestedInput
    detections?: DetectionUncheckedUpdateManyWithoutDroneNestedInput
  }

  export type RouteUpsertWithoutFlightsInput = {
    update: XOR<RouteUpdateWithoutFlightsInput, RouteUncheckedUpdateWithoutFlightsInput>
    create: XOR<RouteCreateWithoutFlightsInput, RouteUncheckedCreateWithoutFlightsInput>
    where?: RouteWhereInput
  }

  export type RouteUpdateToOneWithWhereWithoutFlightsInput = {
    where?: RouteWhereInput
    data: XOR<RouteUpdateWithoutFlightsInput, RouteUncheckedUpdateWithoutFlightsInput>
  }

  export type RouteUpdateWithoutFlightsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coordinates?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRoutesNestedInput
    drone?: DroneUpdateOneWithoutRoutesNestedInput
  }

  export type RouteUncheckedUpdateWithoutFlightsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coordinates?: JsonNullValueInput | InputJsonValue
    createdBy?: IntFieldUpdateOperationsInput | number
    droneId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutFlightHistoryInput = {
    update: XOR<UserUpdateWithoutFlightHistoryInput, UserUncheckedUpdateWithoutFlightHistoryInput>
    create: XOR<UserCreateWithoutFlightHistoryInput, UserUncheckedCreateWithoutFlightHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFlightHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFlightHistoryInput, UserUncheckedUpdateWithoutFlightHistoryInput>
  }

  export type UserUpdateWithoutFlightHistoryInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    drones?: DroneUpdateManyWithoutOwnerNestedInput
    routes?: RouteUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFlightHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drones?: DroneUncheckedUpdateManyWithoutOwnerNestedInput
    routes?: RouteUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DroneCreateWithoutEventsInput = {
    name: string
    model: string
    serialNumber: string
    status?: $Enums.DroneStatus
    batteryLevel?: number
    latitude?: number | null
    longitude?: number | null
    altitude?: number | null
    speed?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutDronesInput
    routes?: RouteCreateNestedManyWithoutDroneInput
    flightHistory?: FlightHistoryCreateNestedManyWithoutDroneInput
    detections?: DetectionCreateNestedManyWithoutDroneInput
  }

  export type DroneUncheckedCreateWithoutEventsInput = {
    id?: number
    name: string
    model: string
    serialNumber: string
    status?: $Enums.DroneStatus
    batteryLevel?: number
    latitude?: number | null
    longitude?: number | null
    altitude?: number | null
    speed?: number | null
    ownerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    routes?: RouteUncheckedCreateNestedManyWithoutDroneInput
    flightHistory?: FlightHistoryUncheckedCreateNestedManyWithoutDroneInput
    detections?: DetectionUncheckedCreateNestedManyWithoutDroneInput
  }

  export type DroneCreateOrConnectWithoutEventsInput = {
    where: DroneWhereUniqueInput
    create: XOR<DroneCreateWithoutEventsInput, DroneUncheckedCreateWithoutEventsInput>
  }

  export type UserCreateWithoutEventsInput = {
    username: string
    email: string
    passwordHash: string
    fullName?: string | null
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    drones?: DroneCreateNestedManyWithoutOwnerInput
    routes?: RouteCreateNestedManyWithoutUserInput
    flightHistory?: FlightHistoryCreateNestedManyWithoutPilotInput
  }

  export type UserUncheckedCreateWithoutEventsInput = {
    id?: number
    username: string
    email: string
    passwordHash: string
    fullName?: string | null
    roleId: number
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    drones?: DroneUncheckedCreateNestedManyWithoutOwnerInput
    routes?: RouteUncheckedCreateNestedManyWithoutUserInput
    flightHistory?: FlightHistoryUncheckedCreateNestedManyWithoutPilotInput
  }

  export type UserCreateOrConnectWithoutEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
  }

  export type DroneUpsertWithoutEventsInput = {
    update: XOR<DroneUpdateWithoutEventsInput, DroneUncheckedUpdateWithoutEventsInput>
    create: XOR<DroneCreateWithoutEventsInput, DroneUncheckedCreateWithoutEventsInput>
    where?: DroneWhereInput
  }

  export type DroneUpdateToOneWithWhereWithoutEventsInput = {
    where?: DroneWhereInput
    data: XOR<DroneUpdateWithoutEventsInput, DroneUncheckedUpdateWithoutEventsInput>
  }

  export type DroneUpdateWithoutEventsInput = {
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumDroneStatusFieldUpdateOperationsInput | $Enums.DroneStatus
    batteryLevel?: IntFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    speed?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutDronesNestedInput
    routes?: RouteUpdateManyWithoutDroneNestedInput
    flightHistory?: FlightHistoryUpdateManyWithoutDroneNestedInput
    detections?: DetectionUpdateManyWithoutDroneNestedInput
  }

  export type DroneUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumDroneStatusFieldUpdateOperationsInput | $Enums.DroneStatus
    batteryLevel?: IntFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    speed?: NullableFloatFieldUpdateOperationsInput | number | null
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routes?: RouteUncheckedUpdateManyWithoutDroneNestedInput
    flightHistory?: FlightHistoryUncheckedUpdateManyWithoutDroneNestedInput
    detections?: DetectionUncheckedUpdateManyWithoutDroneNestedInput
  }

  export type UserUpsertWithoutEventsInput = {
    update: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
  }

  export type UserUpdateWithoutEventsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    drones?: DroneUpdateManyWithoutOwnerNestedInput
    routes?: RouteUpdateManyWithoutUserNestedInput
    flightHistory?: FlightHistoryUpdateManyWithoutPilotNestedInput
  }

  export type UserUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drones?: DroneUncheckedUpdateManyWithoutOwnerNestedInput
    routes?: RouteUncheckedUpdateManyWithoutUserNestedInput
    flightHistory?: FlightHistoryUncheckedUpdateManyWithoutPilotNestedInput
  }

  export type DroneCreateWithoutDetectionsInput = {
    name: string
    model: string
    serialNumber: string
    status?: $Enums.DroneStatus
    batteryLevel?: number
    latitude?: number | null
    longitude?: number | null
    altitude?: number | null
    speed?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutDronesInput
    routes?: RouteCreateNestedManyWithoutDroneInput
    flightHistory?: FlightHistoryCreateNestedManyWithoutDroneInput
    events?: EventCreateNestedManyWithoutDroneInput
  }

  export type DroneUncheckedCreateWithoutDetectionsInput = {
    id?: number
    name: string
    model: string
    serialNumber: string
    status?: $Enums.DroneStatus
    batteryLevel?: number
    latitude?: number | null
    longitude?: number | null
    altitude?: number | null
    speed?: number | null
    ownerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    routes?: RouteUncheckedCreateNestedManyWithoutDroneInput
    flightHistory?: FlightHistoryUncheckedCreateNestedManyWithoutDroneInput
    events?: EventUncheckedCreateNestedManyWithoutDroneInput
  }

  export type DroneCreateOrConnectWithoutDetectionsInput = {
    where: DroneWhereUniqueInput
    create: XOR<DroneCreateWithoutDetectionsInput, DroneUncheckedCreateWithoutDetectionsInput>
  }

  export type DroneUpsertWithoutDetectionsInput = {
    update: XOR<DroneUpdateWithoutDetectionsInput, DroneUncheckedUpdateWithoutDetectionsInput>
    create: XOR<DroneCreateWithoutDetectionsInput, DroneUncheckedCreateWithoutDetectionsInput>
    where?: DroneWhereInput
  }

  export type DroneUpdateToOneWithWhereWithoutDetectionsInput = {
    where?: DroneWhereInput
    data: XOR<DroneUpdateWithoutDetectionsInput, DroneUncheckedUpdateWithoutDetectionsInput>
  }

  export type DroneUpdateWithoutDetectionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumDroneStatusFieldUpdateOperationsInput | $Enums.DroneStatus
    batteryLevel?: IntFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    speed?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutDronesNestedInput
    routes?: RouteUpdateManyWithoutDroneNestedInput
    flightHistory?: FlightHistoryUpdateManyWithoutDroneNestedInput
    events?: EventUpdateManyWithoutDroneNestedInput
  }

  export type DroneUncheckedUpdateWithoutDetectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumDroneStatusFieldUpdateOperationsInput | $Enums.DroneStatus
    batteryLevel?: IntFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    speed?: NullableFloatFieldUpdateOperationsInput | number | null
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routes?: RouteUncheckedUpdateManyWithoutDroneNestedInput
    flightHistory?: FlightHistoryUncheckedUpdateManyWithoutDroneNestedInput
    events?: EventUncheckedUpdateManyWithoutDroneNestedInput
  }

  export type UserCreateManyRoleInput = {
    id?: number
    username: string
    email: string
    passwordHash: string
    fullName?: string | null
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutRoleInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drones?: DroneUpdateManyWithoutOwnerNestedInput
    routes?: RouteUpdateManyWithoutUserNestedInput
    flightHistory?: FlightHistoryUpdateManyWithoutPilotNestedInput
    events?: EventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drones?: DroneUncheckedUpdateManyWithoutOwnerNestedInput
    routes?: RouteUncheckedUpdateManyWithoutUserNestedInput
    flightHistory?: FlightHistoryUncheckedUpdateManyWithoutPilotNestedInput
    events?: EventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DroneCreateManyOwnerInput = {
    id?: number
    name: string
    model: string
    serialNumber: string
    status?: $Enums.DroneStatus
    batteryLevel?: number
    latitude?: number | null
    longitude?: number | null
    altitude?: number | null
    speed?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RouteCreateManyUserInput = {
    id?: number
    name: string
    description?: string | null
    coordinates: JsonNullValueInput | InputJsonValue
    droneId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlightHistoryCreateManyPilotInput = {
    id?: number
    droneId: number
    routeId?: number | null
    startTime: Date | string
    endTime?: Date | string | null
    distance?: number | null
    maxAltitude?: number | null
    maxSpeed?: number | null
    telemetry?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventCreateManyUserInput = {
    id?: number
    type: $Enums.EventType
    message: string
    severity: $Enums.Severity
    read?: boolean
    droneId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DroneUpdateWithoutOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumDroneStatusFieldUpdateOperationsInput | $Enums.DroneStatus
    batteryLevel?: IntFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    speed?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routes?: RouteUpdateManyWithoutDroneNestedInput
    flightHistory?: FlightHistoryUpdateManyWithoutDroneNestedInput
    events?: EventUpdateManyWithoutDroneNestedInput
    detections?: DetectionUpdateManyWithoutDroneNestedInput
  }

  export type DroneUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumDroneStatusFieldUpdateOperationsInput | $Enums.DroneStatus
    batteryLevel?: IntFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    speed?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routes?: RouteUncheckedUpdateManyWithoutDroneNestedInput
    flightHistory?: FlightHistoryUncheckedUpdateManyWithoutDroneNestedInput
    events?: EventUncheckedUpdateManyWithoutDroneNestedInput
    detections?: DetectionUncheckedUpdateManyWithoutDroneNestedInput
  }

  export type DroneUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumDroneStatusFieldUpdateOperationsInput | $Enums.DroneStatus
    batteryLevel?: IntFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    speed?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coordinates?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drone?: DroneUpdateOneWithoutRoutesNestedInput
    flights?: FlightHistoryUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coordinates?: JsonNullValueInput | InputJsonValue
    droneId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flights?: FlightHistoryUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coordinates?: JsonNullValueInput | InputJsonValue
    droneId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlightHistoryUpdateWithoutPilotInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    maxAltitude?: NullableFloatFieldUpdateOperationsInput | number | null
    maxSpeed?: NullableFloatFieldUpdateOperationsInput | number | null
    telemetry?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drone?: DroneUpdateOneRequiredWithoutFlightHistoryNestedInput
    route?: RouteUpdateOneWithoutFlightsNestedInput
  }

  export type FlightHistoryUncheckedUpdateWithoutPilotInput = {
    id?: IntFieldUpdateOperationsInput | number
    droneId?: IntFieldUpdateOperationsInput | number
    routeId?: NullableIntFieldUpdateOperationsInput | number | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    maxAltitude?: NullableFloatFieldUpdateOperationsInput | number | null
    maxSpeed?: NullableFloatFieldUpdateOperationsInput | number | null
    telemetry?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlightHistoryUncheckedUpdateManyWithoutPilotInput = {
    id?: IntFieldUpdateOperationsInput | number
    droneId?: IntFieldUpdateOperationsInput | number
    routeId?: NullableIntFieldUpdateOperationsInput | number | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    maxAltitude?: NullableFloatFieldUpdateOperationsInput | number | null
    maxSpeed?: NullableFloatFieldUpdateOperationsInput | number | null
    telemetry?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUpdateWithoutUserInput = {
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    message?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drone?: DroneUpdateOneWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    message?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    read?: BoolFieldUpdateOperationsInput | boolean
    droneId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    message?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    read?: BoolFieldUpdateOperationsInput | boolean
    droneId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteCreateManyDroneInput = {
    id?: number
    name: string
    description?: string | null
    coordinates: JsonNullValueInput | InputJsonValue
    createdBy: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlightHistoryCreateManyDroneInput = {
    id?: number
    routeId?: number | null
    pilotId: number
    startTime: Date | string
    endTime?: Date | string | null
    distance?: number | null
    maxAltitude?: number | null
    maxSpeed?: number | null
    telemetry?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventCreateManyDroneInput = {
    id?: number
    type: $Enums.EventType
    message: string
    severity: $Enums.Severity
    read?: boolean
    userId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DetectionCreateManyDroneInput = {
    id?: number
    objectType: string
    confidence: number
    coordinates: JsonNullValueInput | InputJsonValue
    timestamp: Date | string
    imageUrl?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RouteUpdateWithoutDroneInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coordinates?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRoutesNestedInput
    flights?: FlightHistoryUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateWithoutDroneInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coordinates?: JsonNullValueInput | InputJsonValue
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flights?: FlightHistoryUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateManyWithoutDroneInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coordinates?: JsonNullValueInput | InputJsonValue
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlightHistoryUpdateWithoutDroneInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    maxAltitude?: NullableFloatFieldUpdateOperationsInput | number | null
    maxSpeed?: NullableFloatFieldUpdateOperationsInput | number | null
    telemetry?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    route?: RouteUpdateOneWithoutFlightsNestedInput
    pilot?: UserUpdateOneRequiredWithoutFlightHistoryNestedInput
  }

  export type FlightHistoryUncheckedUpdateWithoutDroneInput = {
    id?: IntFieldUpdateOperationsInput | number
    routeId?: NullableIntFieldUpdateOperationsInput | number | null
    pilotId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    maxAltitude?: NullableFloatFieldUpdateOperationsInput | number | null
    maxSpeed?: NullableFloatFieldUpdateOperationsInput | number | null
    telemetry?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlightHistoryUncheckedUpdateManyWithoutDroneInput = {
    id?: IntFieldUpdateOperationsInput | number
    routeId?: NullableIntFieldUpdateOperationsInput | number | null
    pilotId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    maxAltitude?: NullableFloatFieldUpdateOperationsInput | number | null
    maxSpeed?: NullableFloatFieldUpdateOperationsInput | number | null
    telemetry?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUpdateWithoutDroneInput = {
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    message?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutDroneInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    message?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    read?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyWithoutDroneInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    message?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    read?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetectionUpdateWithoutDroneInput = {
    objectType?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    coordinates?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetectionUncheckedUpdateWithoutDroneInput = {
    id?: IntFieldUpdateOperationsInput | number
    objectType?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    coordinates?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetectionUncheckedUpdateManyWithoutDroneInput = {
    id?: IntFieldUpdateOperationsInput | number
    objectType?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    coordinates?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlightHistoryCreateManyRouteInput = {
    id?: number
    droneId: number
    pilotId: number
    startTime: Date | string
    endTime?: Date | string | null
    distance?: number | null
    maxAltitude?: number | null
    maxSpeed?: number | null
    telemetry?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlightHistoryUpdateWithoutRouteInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    maxAltitude?: NullableFloatFieldUpdateOperationsInput | number | null
    maxSpeed?: NullableFloatFieldUpdateOperationsInput | number | null
    telemetry?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drone?: DroneUpdateOneRequiredWithoutFlightHistoryNestedInput
    pilot?: UserUpdateOneRequiredWithoutFlightHistoryNestedInput
  }

  export type FlightHistoryUncheckedUpdateWithoutRouteInput = {
    id?: IntFieldUpdateOperationsInput | number
    droneId?: IntFieldUpdateOperationsInput | number
    pilotId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    maxAltitude?: NullableFloatFieldUpdateOperationsInput | number | null
    maxSpeed?: NullableFloatFieldUpdateOperationsInput | number | null
    telemetry?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlightHistoryUncheckedUpdateManyWithoutRouteInput = {
    id?: IntFieldUpdateOperationsInput | number
    droneId?: IntFieldUpdateOperationsInput | number
    pilotId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    maxAltitude?: NullableFloatFieldUpdateOperationsInput | number | null
    maxSpeed?: NullableFloatFieldUpdateOperationsInput | number | null
    telemetry?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}