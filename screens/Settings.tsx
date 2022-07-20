import React from 'react';
import {View, Text} from "react-native";
import Layout from "../components/layout/Layout";

const Settings: React.FC = () => {
    return (
        <Layout backIcon={true}>
            <Text>Settings Page</Text>
        </Layout>
    );
}

export default Settings;
