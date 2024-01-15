import { 
    ExclamationTriangleIcon
} from "@radix-ui/react-icons";

interface FormErrorProps{
    message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
    return (
        <div className="flex items-center space-x-2 text-red-500">
            <ExclamationTriangleIcon />
            <span>{message}</span>
        </div>
    );
};