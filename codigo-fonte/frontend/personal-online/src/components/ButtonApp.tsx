import { Button as ButtonNativeBase, Center, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
    title: string;
    variant?: 'solid' | 'outline';
}

export function ButtonApp({title, variant = 'solid', ...rest}: Props) {
    return(
        <ButtonNativeBase 
        w={290}
        h={14}
    
        bg={variant === "outline" ? "transparent" : "#ffffff"}
        borderWidth={variant === "outline" ? 2 : 0}
        borderColor={"#ffffff"}
        rounded="sm"
        _pressed={{
            bg: variant === "outline" ? "gray.500" : "#ffffff"
        }}
        {...rest}
        >
            <Text 
            color={variant === "outline" ? "#121214" : "#121214"}
            fontFamily="heading" 
            fontSize="sm"
            >
                {title}
            </Text>
        </ButtonNativeBase>
    );
}