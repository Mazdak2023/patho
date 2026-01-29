// Questions Database for Pathophysiology Quiz
// Each question has: text, options (array of 4 choices), correctAnswer (index 0-3), and explanation

const questions = [
    {
        text: "What is the primary cause of cellular hypoxia?",
        options: [
            "Excessive protein synthesis",
            "Inadequate oxygen delivery to tissues",
            "Increased cellular metabolism",
            "Enhanced mitochondrial function"
        ],
        correctAnswer: 1,
        explanation: "Cellular hypoxia occurs when there is inadequate oxygen delivery to tissues. This can result from respiratory failure, cardiovascular problems, or anemia. Without sufficient oxygen, cells cannot perform aerobic metabolism effectively."
    },
    {
        text: "Which type of necrosis is commonly seen in tuberculosis?",
        options: [
            "Coagulative necrosis",
            "Liquefactive necrosis",
            "Caseous necrosis",
            "Fat necrosis"
        ],
        correctAnswer: 2,
        explanation: "Caseous necrosis is characteristic of tuberculosis and has a cheese-like appearance. It's a form of cell death where the tissue maintains a cheese-like consistency due to the destruction of tissue architecture."
    },
    {
        text: "What is the main difference between apoptosis and necrosis?",
        options: [
            "Apoptosis is programmed cell death, while necrosis is pathological",
            "Apoptosis causes inflammation, while necrosis does not",
            "Necrosis affects single cells, while apoptosis affects tissues",
            "Apoptosis is always pathological"
        ],
        correctAnswer: 0,
        explanation: "Apoptosis is a regulated, programmed form of cell death that doesn't cause inflammation. Necrosis is pathological cell death caused by injury, resulting in inflammation and affecting groups of cells."
    },
    {
        text: "Which electrolyte imbalance is most associated with cardiac arrhythmias?",
        options: [
            "Hyponatremia",
            "Hyperkalemia",
            "Hypocalcemia",
            "Hypomagnesemia"
        ],
        correctAnswer: 1,
        explanation: "Hyperkalemia (elevated potassium levels) is particularly dangerous because it can cause life-threatening cardiac arrhythmias. Potassium is crucial for normal cardiac electrical conduction, and elevated levels can lead to cardiac arrest."
    },
    {
        text: "What is the primary pathophysiological mechanism of Type 1 Diabetes?",
        options: [
            "Insulin resistance in peripheral tissues",
            "Autoimmune destruction of pancreatic beta cells",
            "Decreased insulin receptor sensitivity",
            "Excessive glucagon secretion"
        ],
        correctAnswer: 1,
        explanation: "Type 1 Diabetes is an autoimmune disorder where the body's immune system attacks and destroys the insulin-producing beta cells in the pancreas, leading to absolute insulin deficiency."
    },
    {
        text: "Which of the following is a cardinal sign of inflammation?",
        options: [
            "Pallor",
            "Cyanosis",
            "Rubor (redness)",
            "Jaundice"
        ],
        correctAnswer: 2,
        explanation: "The five cardinal signs of inflammation are rubor (redness), calor (heat), tumor (swelling), dolor (pain), and functio laesa (loss of function). Redness is caused by increased blood flow to the inflamed area."
    },
    {
        text: "What is the primary compensatory mechanism in heart failure?",
        options: [
            "Decreased preload",
            "Activation of renin-angiotensin-aldosterone system (RAAS)",
            "Decreased cardiac output",
            "Reduced sympathetic nervous system activity"
        ],
        correctAnswer: 1,
        explanation: "In heart failure, the body activates the RAAS to increase blood volume and blood pressure. While initially compensatory, chronic activation leads to fluid retention, increased workload on the heart, and worsening heart failure."
    },
    {
        text: "Which condition is characterized by destruction of alveolar walls?",
        options: [
            "Asthma",
            "Pneumonia",
            "Emphysema",
            "Pulmonary fibrosis"
        ],
        correctAnswer: 2,
        explanation: "Emphysema is a type of COPD characterized by permanent destruction of alveolar walls, leading to decreased surface area for gas exchange and loss of elastic recoil in the lungs."
    },
    {
        text: "What is the pathophysiological basis of edema?",
        options: [
            "Increased plasma protein concentration",
            "Decreased capillary hydrostatic pressure",
            "Increased capillary permeability or decreased plasma oncotic pressure",
            "Enhanced lymphatic drainage"
        ],
        correctAnswer: 2,
        explanation: "Edema results from fluid accumulation in interstitial spaces due to increased capillary permeability, decreased plasma oncotic pressure (hypoalbuminemia), increased capillary hydrostatic pressure, or lymphatic obstruction."
    },
    {
        text: "Which clotting pathway is initiated by tissue trauma and release of tissue factor?",
        options: [
            "Intrinsic pathway",
            "Extrinsic pathway",
            "Common pathway",
            "Fibrinolytic pathway"
        ],
        correctAnswer: 1,
        explanation: "The extrinsic pathway of coagulation is initiated when tissue trauma releases tissue factor (Factor III), which then activates Factor VII. This is the faster pathway and is triggered by external damage to blood vessels."
    },
    {
        text: "What is the primary defect in sickle cell disease?",
        options: [
            "Abnormal iron metabolism",
            "Deficiency in clotting factors",
            "Mutation in the beta-globin gene",
            "Excessive red blood cell production"
        ],
        correctAnswer: 2,
        explanation: "Sickle cell disease is caused by a mutation in the beta-globin gene, resulting in production of abnormal hemoglobin S (HbS). This causes red blood cells to become rigid and sickle-shaped under low oxygen conditions."
    },
    {
        text: "Which type of shock is characterized by decreased cardiac output due to heart failure?",
        options: [
            "Hypovolemic shock",
            "Cardiogenic shock",
            "Distributive shock",
            "Obstructive shock"
        ],
        correctAnswer: 1,
        explanation: "Cardiogenic shock occurs when the heart cannot pump enough blood to meet the body's needs, typically due to severe heart damage from myocardial infarction, cardiomyopathy, or severe arrhythmias."
    },
    {
        text: "What is the primary pathophysiological change in atherosclerosis?",
        options: [
            "Thinning of arterial walls",
            "Formation of plaques in arterial walls",
            "Increased arterial elasticity",
            "Decreased blood viscosity"
        ],
        correctAnswer: 1,
        explanation: "Atherosclerosis involves the buildup of fatty plaques (atheromas) in arterial walls, leading to narrowing of arteries, reduced blood flow, and increased risk of thrombosis. This is a major cause of cardiovascular disease."
    },
    {
        text: "Which hormone is primarily responsible for regulating serum calcium levels?",
        options: [
            "Insulin",
            "Parathyroid hormone (PTH)",
            "Cortisol",
            "Thyroxine"
        ],
        correctAnswer: 1,
        explanation: "Parathyroid hormone (PTH) is the primary regulator of serum calcium levels. It increases blood calcium by stimulating bone resorption, increasing renal calcium reabsorption, and promoting vitamin D activation."
    },
    {
        text: "What is the pathophysiological mechanism of anaphylactic shock?",
        options: [
            "Massive vasoconstriction",
            "Severe blood loss",
            "Widespread vasodilation and increased capillary permeability",
            "Cardiac pump failure"
        ],
        correctAnswer: 2,
        explanation: "Anaphylactic shock is a type of distributive shock caused by a severe allergic reaction. It results in widespread vasodilation, increased capillary permeability, and fluid shift from vessels to tissues, leading to severe hypotension."
    }
];

// Shuffle array function
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
