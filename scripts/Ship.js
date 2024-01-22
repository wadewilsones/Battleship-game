class Ship{

    name;
    length;
    isDestryed;
    isHit;
    hitPoints;


    constructor(name, length, isDestryed, isHit, hitPoints){
        this.name = name;
        this.length = length;
        this.isDestryed = isDestryed;
        this.isHit = isHit;
        this.hitPoints = hitPoints;
    }

    hit(point){
        this.isHit = true;
        this.hitPoints.push(point);
    }

    blow(){
        this.isDestryed = true;
    }


}