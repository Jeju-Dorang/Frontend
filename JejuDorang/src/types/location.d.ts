export interface Location {
    latitude : number;
    longitude : number;
}

export interface LocationApiRequest {
	mapX: stirng;      // 위도
	mapY: string;     // 경도
}

export interface StayLocation {
    longitude : number;
    latitude : number;
    lodgingName : string;
}