import { BadRequestException } from '@nestjs/common';
import { Elist } from '../../../@generated/prisma-nestjs-graphql';
import { ExistsState, InitialState } from '../../event-store/types/decider-state.type';
import { Decider } from '../../event-store/utils/create-command-handler.util';
import { decideUpdateEventData } from '../../event-store/utils/decide-update-event-data.util';
import { CreateElistOfferCommand } from './commands/create-elist-offer/create-elist-offer.command';
import { DeleteElistOfferCommand } from './commands/delete-elist-offer/delete-elist-offer.command';
import { UpdateElistOfferCommand } from './commands/update-elist-offer/update-elist-offer.command';
import { ElistOfferCreatedEvent } from './events/elist-offer-created/elist-offer-created.event';
import { ElistOfferDeletedEvent } from './events/elist-offer-deleted/elist-offer-deleted.event';
import { ElistOfferUpdatedEvent } from './events/elist-offer-updated/elist-offer-updated.event';
import { CreateElistOfferInput } from './inputs/create-elist-offer.input';
import { UpdateElistOfferInput } from './inputs/update-elist-offer.input';

export type ElistOfferState = InitialState | ExistsState<'elist-offer', Elist>;
export type ElistOfferCommand = CreateElistOfferCommand | UpdateElistOfferCommand | DeleteElistOfferCommand;
export type ElistOfferEvent = ElistOfferCreatedEvent | ElistOfferUpdatedEvent | ElistOfferDeletedEvent;

export const initialState: ElistOfferState = { exists: false };

export function evolve(state: ElistOfferState, event: ElistOfferEvent): ElistOfferState {
  switch (event.type) {
    case 'ElistOfferCreatedEvent': {
      const { data, metadata } = event;
      return {
        exists: true,
        type: 'elist-offer',
        data: {
          ...(state.exists === true && { ...state.data }),
          ...data,
          created_at: new Date(state.exists === false ? metadata.created_at : state.data.created_at),
        },
      };
    }
    case 'ElistOfferUpdatedEvent': {
      const { data, metadata } = event;

      return {
        exists: true,
        type: 'elist-offer',
        data: {
          ...(state.exists === true && { ...state.data }),
          ...data,
          updated_at: new Date(metadata.created_at as string),
        },
      };
    }
    case 'ElistOfferDeletedEvent': {
      const { metadata } = event;

      return {
        exists: true,
        type: 'elist-offer',
        data: {
          ...(state.exists === true && { ...state.data }),
          deleted_at: new Date(metadata.created_at as string),
        },
      };
    }
    default: {
      return { exists: false };
    }
  }
}

export function decide(state: ElistOfferState, command: ElistOfferCommand): ElistOfferEvent[] {
  switch (command.type) {
    case 'CreateElistOfferCommand': {
      if (state.exists) throw new BadRequestException('ElistOffer already exists');

      const data: CreateElistOfferInput = decideUpdateEventData(command, state);

      if (data == null) return [];

      return [
        new ElistOfferCreatedEvent(data, {
          ...command.metadata,
          created_at: new Date().toISOString(),
        }),
      ];
    }
    case 'UpdateElistOfferCommand': {
      if (!state.exists) throw new BadRequestException('ElistOffer does not exist');
      const data: UpdateElistOfferInput = decideUpdateEventData(command, state);

      if (data == null) return [];
      return [
        new ElistOfferUpdatedEvent(data, {
          ...command.metadata,
          updated_at: new Date().toISOString(),
        }),
      ];
    }
    case 'DeleteElistOfferCommand': {
      if (!state.exists) throw new BadRequestException('ElistOffer does not exist');

      if (state.data.deleted_at != null) return [];

      return [new ElistOfferDeletedEvent(command.data, { ...command.metadata, created_at: new Date().toISOString() })];
    }
    default: {
      return [];
    }
  }
}

export const decider: Decider<ElistOfferState, ElistOfferEvent, ElistOfferCommand> = {
  initialState,
  evolve,
  decide,
};
