import GInputText from "./components/GInputText.tsx";
import GInputDate from "./components/GInputDate.tsx";
import GInputNumber from "./components/GInputNumber.tsx";
import GInputArray from "@/components/GInput/components/GInputArray.tsx";
import GInputPassword from "@/components/GInput/components/GInputPassword.tsx";
import GInputSelect from "@/components/GInput/components/GInputSelect.tsx";
import GSwitch from "@/components/GInput/components/GSwitch.tsx";
import GInputArea from "@/components/GInput/components/GInputArea.tsx";
import GCheckBox from "@/components/GInput/components/GCheckBox.tsx";

const GInputs = {
    Text: GInputText,
    Date: GInputDate,
    Number: GInputNumber,
    Array: GInputArray,
    Password: GInputPassword,
    Select: GInputSelect,
    Switch: GSwitch,
    Checkbox: GCheckBox,
    Area: GInputArea,
}
export default GInputs