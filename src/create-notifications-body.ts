import { IsNotEmpty, IsUUID, Length } from "class-validator";

// Validação dos dados da classe, cada decorator fornece uma validação específica.
export class CreateNotificationBody {
    @IsNotEmpty()
    @Length(5, 240)
    content: string;
    
    @IsNotEmpty()
    category: string;
    
    @IsNotEmpty()
    @IsUUID()
    recipientID: string;
}