import GInputText from "./GInputText.tsx";
import GInputDate from "./GInputDate.tsx";
import GInputNumber from "./GInputNumber.tsx";
import GInputArray from "@/components/GInput/GInputArray.tsx";
import GInputPassword from "@/components/GInput/GInputPassword.tsx";
import GInputSelect from "@/components/GInput/GInputSelect.tsx";
import GSwitch from "@/components/GInput/GSwitch.tsx";

const GInputs = {
    Text: GInputText,
    Date: GInputDate,
    Number: GInputNumber,
    Array: GInputArray,
    Password: GInputPassword,
    Select: GInputSelect,
    Switch: GSwitch
}
export default GInputs