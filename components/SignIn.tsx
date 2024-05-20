import { signIn } from "@/auth"

export function SignIn() {
    return (
        <>
        <form
            action={async () => {
                "use server"
                await signIn("google")
            }}
        >
            <button type="submit">구글로 로그인</button>
        </form>
    <form
        action={async () => {
            "use server"
            await signIn("kakao")
        }}
    >
        <button type="submit">카카오로 로그인</button>
    </form>
            </>
)
}