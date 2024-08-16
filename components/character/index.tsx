import { View, Text, StyleSheet } from "react-native";
import { Section, Name, Picture } from "./style";


type CharacterProps = {
    name: string;
    image: string;
}

export default function Character(props: CharacterProps) {

    return (
        <Section>
            <Picture source={{ uri: props.image }} />
            <Name>
                { props.name}
            </Name>
        </Section>
    )
}