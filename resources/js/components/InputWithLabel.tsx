
export const InputWithLabel = ({ text, placeholder, value }: { text: string, placeholder: string, value?: string | number }) => {
    return (
        <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {text}
            </label>
            <input value={value} className="flex h-9 w-full rounded-md border-1 border-neutral-300 bg-transparent px-3 py-1 text-base shadow-sm transition-colors" placeholder={placeholder} />
        </div>
    )
}
