// import {
//   Card,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// import SignInWithGoogleButton from "./SignInWithGoogleButton";
// import { Heart } from "lucide-react";

// export function LoginForm() {
//   return (
//     <Card className="text-center flex items-center flex-col align-middle">
//       <Heart color="#ff2157" />
//       <CardHeader>
//         <CardTitle className="text-2xl">Pickup line generator</CardTitle>
//         <CardDescription>
//           Generate pickup line for your crush now!
//         </CardDescription>
//         <SignInWithGoogleButton />
//       </CardHeader>
//       <CardFooter>
//         By signing up, you agree to the Terms of Use, Privacy Notice
//       </CardFooter>
//     </Card>
//   );
// }
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import SignInWithGoogleButton from "./SignInWithGoogleButton";
import { Heart } from "lucide-react";

export function LoginForm() {
  return (
    <Card className="text-center h-screen flex items-center flex-col justify-center p-8 rounded-lg shadow-lg bg-white">
      <Heart className="text-red-500 mb-4" size={48} />
      <CardHeader>
        <CardTitle className="text-2xl font-semibold mb-2">Pickup Line Generator</CardTitle>
        <CardDescription className="text-gray-600">
          Generate a pickup line for your crush now!
        </CardDescription>
        <div className="mt-4">
          <SignInWithGoogleButton />
        </div>
      </CardHeader>
      <CardFooter className="text-sm text-gray-500 mt-4">
        By signing up, you agree to the Terms of Use and Privacy Notice.
      </CardFooter>
    </Card>
  );
}
