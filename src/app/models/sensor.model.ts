export interface SensorInfo {
	id: string; // UUID for this sensor reading
	type: string; // type of the sensor
	name: string; // type of data read by sensor
	lowerRange: number; // measuring range lower bound
	upperRange: number; // measuring range upper bound
	reading: number; // actual value being read
	unit: string; // measurement unit
	readingTimeStamp: string; // when the reading was taken
}
