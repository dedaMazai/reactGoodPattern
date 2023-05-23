import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const HeaderPanel = () => {
	return (
		<Header>
			<div
				className="logo"
				style={{
					display: "flex",
					alignItems: "center",
					color: "#fff",
					justifyContent: "center",
					float: "left",
					width: "120px",
					height: "31px",
					margin: "16px 24px 16px 0",
					background: "rgba(255, 255, 255, 0.3)",
					fontWeight: 600,
				}}
			>
				Лого
			</div>
			<Menu
				theme="dark"
				mode="horizontal"
				defaultSelectedKeys={["0"]}
				items={[
					{ key: "0", label: <Link to="/">Главная</Link> },
					{ key: "1", label: <Link to="/aodb">АОБД</Link> },
					{ key: "2", label: "СУР" },
					{ key: "3", label: "ЦТ" },
				]}
			/>
		</Header>
	);
};

export default HeaderPanel;
