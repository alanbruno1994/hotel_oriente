import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Form from "./components/form";

export default function Login() {
  return (
    <>
      <div
        style={{ minHeight: "calc(100vh - 160px)" }}
        className="flex justify-center items-center"
      >
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
            <Form />
          </CardHeader>
        </Card>
      </div>
    </>
  );
}
