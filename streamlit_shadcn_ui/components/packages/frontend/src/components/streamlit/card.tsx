import { forwardRef } from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface StCardProps {
    title?: string;
    content?: string;
    description?: string;
}
export const StCard = forwardRef<HTMLDivElement, StCardProps>(
    (props: StCardProps, ref) => {
        const { title, content, description } = props;
        return (
            <Card ref={ref}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        {title}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{content}</div>
                    <p className="text-xs text-muted-foreground">
                        {description}
                    </p>
                </CardContent>
            </Card>
        );
    }
);
