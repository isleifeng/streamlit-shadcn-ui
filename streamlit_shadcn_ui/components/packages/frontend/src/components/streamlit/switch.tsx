import { forwardRef, useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Streamlit } from "streamlit-component-lib";

interface StSwitchProps {
    label?: string;
    checked?: boolean;
}
export const StSwitch = forwardRef<HTMLDivElement, StSwitchProps>(
    (props: StSwitchProps, ref) => {
        const { label, checked } = props;
        const [checkedStatus, setCheckedStatus] = useState(checked);
        useEffect(() => {
            setCheckedStatus(checked);
        }, [checked]);
        return (
            <div ref={ref} className="flex items-center space-x-2 m-1">
                <Switch
                    checked={checkedStatus}
                    onCheckedChange={(c) => {
                        setCheckedStatus(c);
                        Streamlit.setComponentValue(c);
                    }}
                />
                {label && <Label>{label}</Label>}
            </div>
        );
    }
);
