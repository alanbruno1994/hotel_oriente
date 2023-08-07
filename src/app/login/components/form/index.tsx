import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Form() {
  return (
    <form className="flex flex-col">
      <Input className="my-2" type="text" />
      <Input className="my-2" type="password" />
      <Button className="my-2" type="submit">
        Login
      </Button>
      <Button variant={"secondary"} className="my-2" type="reset">
        Clear
      </Button>
    </form>
  );
}
