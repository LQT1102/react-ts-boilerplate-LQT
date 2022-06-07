import {
    Button,
    DarkMode,
    Heading,
    HStack,
    LightMode,
    useColorMode,
} from "@chakra-ui/react";
import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";

type Props = {};

export default function DemoPage({}: Props) {
    const { t, i18n } = useTranslation();
    const { colorMode, toggleColorMode } = useColorMode();
    const toggleLangue = () => {
        const currentLang = i18n.language;
        if (currentLang === "vi") i18n.changeLanguage("en");
        else i18n.changeLanguage("vi");
    };

    console.log(colorMode);

    return (
        <HStack>
            <Heading>{t("hello")}</Heading>
            <LightMode>
                <Button size="sm" colorScheme="blue">
                    Light Mode Always
                </Button>
            </LightMode>

            <DarkMode>
                <Button size="sm" colorScheme="blue">
                    Dark Mode Always
                </Button>
            </DarkMode>

            <Button size="sm" colorScheme="blue" onClick={toggleColorMode}>
                Toggle Mode
            </Button>

            <Button
                size="sm"
                colorScheme="blue"
                onClick={() => {
                    toggleLangue();
                }}
            >
                Toggle Language
            </Button>
        </HStack>
    );
}
