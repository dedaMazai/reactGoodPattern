import { Layout, theme } from "antd";

const { Content } = Layout;

const Workflow = ({ children }) => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<Content style={{ padding: "25px 25px 0" }}>
			<div
				className="site-layout-content"
				style={{
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					background: colorBgContainer,
				}}
			>
				{children}
			</div>
		</Content>
	);
};

export default Workflow;
