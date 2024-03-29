import { Component, ErrorInfo, ReactNode } from "react";
import { ErrorPage } from "./ErrorPage";

interface Props {
	children?: ReactNode;
}

interface State {
	hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
	public override state: State = {
		hasError: false,
	};

	public static getDerivedStateFromError(_: Error): State {
		return { hasError: true };
	}

	public override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error("Uncaught error:", error, errorInfo);
	}

	public override render() {
		if (this.state.hasError) {
			return <ErrorPage />;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
