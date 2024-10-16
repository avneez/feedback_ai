import { Message } from "@/app/model/User";

export interface ApiResponse {
    success: boolean;
    message: string;
    isAcceptingMessaging?: boolean;
    messages?: Array<Message>
}