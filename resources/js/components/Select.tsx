import { ChevronDown } from "lucide-react";
export const Select = ({ defaultValue }: { defaultValue?: string }) => {
    return (
        <div className="relative w-full">
            <select
                defaultValue={defaultValue ?? ""}
                className="
                    flex h-9 w-full appearance-none
                    items-center justify-between
                    whitespace-nowrap rounded-md
                    border border-gray-300
                    bg-transparent
                    px-3 py-2 pr-8
                    text-sm shadow-sm
                    cursor-pointer
                    focus:outline-none
                    focus:ring-1
                    focus:ring-ring
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                "
            >
                <option value="" disabled>
                    Select
                </option>

                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>

            <ChevronDown
                className="
                    pointer-events-none
                    absolute right-3 top-1/2
                    h-4 w-4
                    -translate-y-1/2
                    opacity-50
                "
            />
        </div>
    );
}
