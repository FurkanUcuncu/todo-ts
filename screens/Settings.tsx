import React from 'react';
import {View, Text} from "react-native";
import Layout from "../components/layout/Layout";

const Settings: React.FC = () => {
    return (
        <Layout headerText="Settings" backIcon={true}>
            <Text>Settings Page</Text>
        </Layout>
    );
}

export default Settings;
