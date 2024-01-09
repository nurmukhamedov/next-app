import { nationApi, genderApi, ageApi } from "@/apis/api";
import Link from "next/link";
import '../../../style.css'
const getPredictedNation = async (url) => {
    const response = await fetch(url);
    return response.json();
}
const getPredictedAge = async (url) => {
    const response = await fetch(url);
    return response.json();
}
const getPredictedGender = async (url) => {
    const response = await fetch(url);
    return response.json();
}


export default async function Name({ params }) {
    const nationData = getPredictedNation(`${nationApi}${params.name}`);
    const ageData = getPredictedAge(`${ageApi}${params.name}`);
    const genderData = getPredictedGender(`${genderApi}${params.name}`);

    const [nation, age, gender] = await Promise.all([nationData, ageData, genderData]);
    console.log(nation);
    console.log(age);
    console.log(gender);
    return (
        <>
            <div className="bg-blue-700 text-white w-1/2 rounded-lg m-auto mt-5 p-5">
                <h4 className="text-center">Based on Gender</h4>
                <div className="flex items-start justify-center gap-10 mt-5">
                    <div>
                        <div className="flex items-center gap-1">
                            <h6>Count: </h6>
                            <p> {gender?.count} </p>
                        </div>
                        <div className="flex items-center gap-1">
                            <h6>Name: </h6>
                            <p className="capitalize"> {gender?.name} </p>
                        </div>
                        <div className="flex items-center gap-1">
                            <h6>Gender: </h6>
                            <p className="capitalize"> {gender?.gender} </p>
                        </div>
                        <div className="flex items-center gap-1">
                            <h6>Probability: </h6>
                            <p className="capitalize"> {gender?.probability} </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-blue-700 text-white w-1/2 rounded-lg m-auto mt-5 p-5">
                <h4 className="text-center">Based on Nation</h4>
                <div className="flex items-start justify-center gap-10 mt-5">
                    <div>
                        <div className="flex items-center gap-1">
                            <h6>Count: </h6>
                            <p> {nation?.count} </p>
                        </div>
                        <div className="flex items-center gap-1">
                            <h6>Name: </h6>
                            <p className="capitalize"> {nation?.name} </p>
                        </div>
                    </div>
                    <div>
                        <ul>
                            {nation?.country?.map((country, index) => (
                                <li key={index}>
                                    <span>Country ID: {country.country_id}</span> <br />
                                    <span>Probability: {country.probability}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
            <div className="bg-blue-700 text-white w-1/2 rounded-lg m-auto mt-5 p-5">
                <h4 className="text-center">Based on Age</h4>
                <div className="flex items-start justify-center gap-10 mt-5">
                    <div>
                        <div className="flex items-center gap-1">
                            <h6>Count: </h6>
                            <p> {age?.count} </p>
                        </div>
                        <div className="flex items-center gap-1">
                            <h6>Name: </h6>
                            <p className="capitalize"> {age?.name} </p>
                        </div>
                        <div className="flex items-center gap-1">
                            <h6>Age: </h6>
                            <p className="capitalize"> {age?.age} </p>
                        </div>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>

            <Link href="/">Back To Home Page</Link>
        </>
    )
}