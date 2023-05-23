import { Layout } from "antd";
import HeaderPanel from "../widgets/Header";
import FooterPanel from "../widgets/Footer";
import Workflow from "../widgets/Workflow";

export default function Main() {
	return (
		<Layout className="layout" style={{ margin: -8, height: "100vh" }}>
			<HeaderPanel />
			<Workflow />
			<FooterPanel />
		</Layout>
	);
}
