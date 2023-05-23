import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const FooterPanel = () => {
	return <Footer style={{ textAlign: "center" }}>©{new Date().getUTCFullYear()}</Footer>;
};

export default FooterPanel;
