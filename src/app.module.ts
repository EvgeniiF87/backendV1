import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { EventModule } from './event/event.module';
import { EventImagesModule } from './event_images/event_images.module';
import { EventInfoModule } from './event-info/event-info.module';
import { TagModule } from './tag/tag.module';
import { EventTagModule } from './event-tag/event-tag.module';
import { CostOptionsModule } from './cost-options/cost-options.module';
import { EventCostOptionsModule } from './event-cost-options/event-cost-options.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      sortSchema: true,
      playground: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        type: config.get<'aurora-postgres'>('TYPEORM_CONNECTION'),
        username: config.get<string>('TYPEORM_USERNAME'),
        password: config.get<string>('TYPEORM_PASSWORD'),
        database: config.get<string>('TYPEORM_DATABASE'),
        port: config.get<number>('TYPEORM_PORT'),
        entities: [__dirname + 'dist/**/*.entity{.ts,.js}'],
        synchronize: true,
        autoLoadEntities: true,
        logging: true,
      }),
    }),
    UserModule,
    EventModule,
    EventImagesModule,
    EventInfoModule,
    TagModule,
    EventTagModule,
    CostOptionsModule,
    EventCostOptionsModule,
  ],
})
export class AppModule {}
