
import { InputWithLabel } from "@/components/InputWithLabel";
import { Button } from "@/components/ui/button";
import { Link, Form } from "@inertiajs/react";

export default function Login() {
    return (
        <div>
            <div className="fixed overflow-y-auto sm:max-w-lg sm:rounded-lg max-h-[90vh] bg-[#fef8fa] border-[#e7dbd8] left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 p-6 shadow-lg duration-200">
                <div className="flex flex-col space-y-1.5 text-center sm:text-left">
                    <h2 className="font-semibold tracking-tight font-serif text-2xl">Login</h2>
                    <p className="text-[#796360] text-sm">Login to your existing account</p>
                </div>
                <Form method="post" action={"/login"} className="space-y-4" >
                    <InputWithLabel name="name" value={""} placeholder="john doe" text={"Username"} />
                    <InputWithLabel name="password" value={""} placeholder="password..." text={"Password"} />
                    <button type="submit" className={"w-full bg-black text-white py-2 rounded-lg"}>Login</button>

                </Form>
                <span className="w-full flex justify-center"> don't have account?{' '}<Link href={"/signup"}>Sign up</Link></span>
            </div>
        </div>
    )
}
