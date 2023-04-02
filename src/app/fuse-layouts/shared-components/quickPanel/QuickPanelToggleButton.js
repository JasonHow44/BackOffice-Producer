import { Button, Icon, IconButton } from '@material-ui/core';
import ModalVideo from "react-modal-video";
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import "react-modal-video/scss/modal-video.scss";

function QuickPanelToggleButton(props) {
	const [isOpen, setOpen] = useState(false);
	const location = useLocation();
	const { pathname } = location;

	const [videoId, setVideoId] = useState()

	useEffect(() => {
		const videoMap = {
			'/apps/dashboard/dashboard': 'UYnxmea9ABg',
			'/apps/vision/income-goals': '0X8NYnT2tqE',
			'/apps/bonus-plan/all': 'w6d6j4zIYYE',
			'/apps/enter-sales/auto-entry': 'RCOIOlr1nr0',
			'/apps/income/payroll': '5yobtk9u4Kg',
			'/apps/income/possible-money': 'v-T-JM5SpFE',
			'/apps/production/sales-results': 'JNJxusgMcS8',
			'/apps/production/product-line': 'APRKF7L-yus',
			'/apps/production/multiline': '3LbOLu3f2-Q',
			'/apps/activity/appRegister': 'zVhEjT44clI'
		}
		setVideoId(videoMap[pathname])
	}, [pathname])

	return (
		<>
			<ModalVideo
				channel="youtube"
				autoplay
				isOpen={isOpen}
				videoId={videoId}
				onClose={() => setOpen(false)}
			/>
			<Button className="capitalize" onClick={() => setOpen(true)}>
				Tutorial&nbsp;
				{props.children}
			</Button>
		</>
	);
}

QuickPanelToggleButton.defaultProps = {
	children: <Icon>ondemand_video</Icon>
};

export default QuickPanelToggleButton;
