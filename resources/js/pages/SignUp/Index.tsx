import { InputWithLabel } from "@/components/InputWithLabel";
import { Button } from "@/components/ui/button";

export default function SignUp() {
    return (
        <div>

            <div className="fixed overflow-y-auto sm:max-w-lg sm:rounded-lg max-h-[90vh] bg-[#fef8fa] border-[#e7dbd8] left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 p-6 shadow-lg duration-200">
                <div className="flex flex-col space-y-1.5 text-center sm:text-left">
                    <h2 className="font-semibold tracking-tight font-serif text-2xl">SignUp</h2>
                    <p className="text-[#796360] text-sm">Sing up and explore our product</p>
                </div>
                <InputWithLabel name="name" value={""} placeholder="john doe" text={"Username"} />
                <InputWithLabel name="email" value={""} placeholder="jane@gmail.com" text={"Email"} />

                <InputWithLabel name="password" value={""} placeholder="password..." text={"Password"} />
                <Button className={"w-full bg-black text-white py-4"}>Sign Up</Button>
            </div>
        </div>
    )
}
