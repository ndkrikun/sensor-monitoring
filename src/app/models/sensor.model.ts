export interface SensorInfo {
	id: string;
	type: string;
	name: string;
	lowerRange: number;
	upperRange: number;
}

export interface SensorReadingsInfo extends SensorInfo {
	readings: {
		reading: number;
		unit: string;
		readingTimeStamp: string;
	}[];
}
