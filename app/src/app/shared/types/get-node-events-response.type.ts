import { NodeEvent } from './node-event.type';

export interface GetNodeEventsResponse {
    id: string;
    events: NodeEvent[];
}
