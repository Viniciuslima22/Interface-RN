import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack = {
    Principal: any
    Profile?: {
        name: string
    }
    Detail: undefined
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>