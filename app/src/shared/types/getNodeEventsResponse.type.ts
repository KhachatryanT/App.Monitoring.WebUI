import { NodeEvent } from './nodeEvent.type';

export interface GetNodeEventsResponse {
    id: string;
    events: NodeEvent[];
}
