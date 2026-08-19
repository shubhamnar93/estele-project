<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Inertia\Inertia;
use Inertia\Response;

class StoreLocatorController extends Controller
{
    public function Index(): Response
    {
$stores = [
    [
        "name" => "Mall of India (DLF)",
        "address" => "DLF Mall Of India, 3K-6A 2nd Floor, Plot No - M-03, Sector-18, Noida, Uttar Pradesh - 201301",
        "mobile" => "+91-8447119291",
        "imageurl" => "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80",
    ],
    [
        "name" => "Select Citywalk",
        "address" => "Select Citywalk, A-3 District Centre, Saket, New Delhi - 110017",
        "mobile" => "+91-8447119292",
        "imageurl" => "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
    ],
    [
        "name" => "Ambience Mall Gurgaon",
        "address" => "Ambience Mall, NH-8, Sector 24, Gurugram, Haryana - 122002",
        "mobile" => "+91-8447119293",
        "imageurl" => "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=80",
    ],
    [
        "name" => "Phoenix Marketcity Mumbai",
        "address" => "Phoenix Marketcity, LBS Marg, Kurla West, Mumbai, Maharashtra - 400070",
        "mobile" => "+91-8447119294",
        "imageurl" => "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80",
    ],
    [
        "name" => "Phoenix Palladium",
        "address" => "Phoenix Palladium, Senapati Bapat Marg, Lower Parel, Mumbai, Maharashtra - 400013",
        "mobile" => "+91-8447119295",
        "imageurl" => "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=80",
    ],
    [
        "name" => "Orion Mall Bangalore",
        "address" => "Orion Mall, Dr Rajkumar Road, Rajajinagar, Bengaluru, Karnataka - 560055",
        "mobile" => "+91-8447119296",
        "imageurl" => "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=80",
    ],
    [
        "name" => "Phoenix Marketcity Pune",
        "address" => "Phoenix Marketcity, Viman Nagar Road, Pune, Maharashtra - 411014",
        "mobile" => "+91-8447119298",
        "imageurl" => "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1200&q=80",
    ],
    [
        "name" => "Quest Mall Kolkata",
        "address" => "Quest Mall, 33 Syed Amir Ali Avenue, Kolkata, West Bengal - 700017",
        "mobile" => "+91-8447119300",
        "imageurl" => "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&w=1200&q=80",
    ],
    [
        "name" => "Phoenix Mall of Asia",
        "address" => "Phoenix Mall of Asia, Hebbal, Bengaluru, Karnataka - 560024",
        "mobile" => "+91-8447119301",
        "imageurl" => "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1200&q=80",
    ],
    [
        "name" => "VR Chennai",
        "address" => "VR Chennai, Jawaharlal Nehru Road, Anna Nagar, Chennai, Tamil Nadu - 600040",
        "mobile" => "+91-8447119302",
        "imageurl" => "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?auto=format&fit=crop&w=1200&q=80",
    ],
    [
        "name" => "Express Avenue Chennai",
        "address" => "Express Avenue, Whites Road, Royapettah, Chennai, Tamil Nadu - 600014",
        "mobile" => "+91-8447119303",
        "imageurl" => "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=80",
    ],
    [
        "name" => "LuLu Mall Kochi",
        "address" => "LuLu Mall, 34/1000 N.H. 47, Edappally, Kochi, Kerala - 682024",
        "mobile" => "+91-8447119304",
        "imageurl" => "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=1200&q=80",
    ],
    [
        "name" => "LuLu Mall Hyderabad",
        "address" => "LuLu Mall, Kukatpally, Hyderabad, Telangana - 500072",
        "mobile" => "+91-8447119305",
        "imageurl" => "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80",
    ],
    [
        "name" => "Inorbit Mall Hyderabad",
        "address" => "Inorbit Mall, APIIC Software Layout, Madhapur, Hyderabad, Telangana - 500081",
        "mobile" => "+91-8447119306",
        "imageurl" => "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=1200&q=80",
    ],
    [
        "name" => "Elante Mall Chandigarh",
        "address" => "Elante Mall, 178A Industrial Area Phase 1, Chandigarh - 160002",
        "mobile" => "+91-8447119307",
        "imageurl" => "https://images.unsplash.com/photo-1601821765780-754fa98637c1?auto=format&fit=crop&w=1200&q=80",
    ],
    [
        "name" => "World Trade Park Jaipur",
        "address" => "World Trade Park, JLN Marg, Malviya Nagar, Jaipur, Rajasthan - 302017",
        "mobile" => "+91-8447119308",
        "imageurl" => "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=1200&q=80",
    ],
    [
        "name" => "Ahmedabad One Mall",
        "address" => "Ahmedabad One Mall, Vastrapur, Ahmedabad, Gujarat - 380015",
        "mobile" => "+91-8447119309",
        "imageurl" => "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1200&q=80",
    ],
    [
        "name" => "DLF Promenade",
        "address" => "DLF Promenade, Nelson Mandela Road, Vasant Kunj, New Delhi - 110070",
        "mobile" => "+91-8447119310",
        "imageurl" => "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
    ],
];
        return Inertia::render('StoreLocation/Index', [
            "stores" => $stores
        ]);
    }
}
