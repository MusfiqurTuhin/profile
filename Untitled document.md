Education    
2021 \- 2025  
B.Sc. in Computer Science & Engineering    
United International University  
Major: Data Science  
…………………….  
2018 \- 2020  
Higher Secondary Certificate (HSC) in Science Group  
Border Guard Public School & College, Sylhet  
…..  
2010 — 2018  
Secondary School Certificate (SSC) in Science  
Habiganj Govt. High School  
…..

Papers:  
\- Plant Disease Recognition from the Perspective of Bangladesh: A Comparative Study of Deep Learning Models and Ensemble Techniques  
Accepted and presented at International Conference on Electrical, Computer and Communication Engineering (ECCE)  
Published at [https://ieeexplore.ieee.org/document/11013222](https://ieeexplore.ieee.org/document/11013222)

## **Abstract:** Plant disease detection is one of the most crucial tasks in modern agriculture, and early detection is essential to minimize crop loss. In this work, we evaluate several deep learning models, including Xception, VGG-16, VGG-19, ResNet-101V2, ResNet-152V2, and ConvNeXtBase, for plant disease detection. We also propose an ensemble learning approach by combining the outputs of Xception, VGG-19, and ResNet-152V2 to improve prediction results. For each model, performance is evaluated using metrics such as accuracy, F1 score, precision, recall, and ROC-AUC. Among the individual models, the ensemble model achieved a test accuracy of 95.45%, a validation accuracy of 94.51%, an F1 score of 95.27%, and an ROC-AUC of 99.93%. These results demonstrate that ensemble methods are highly effective in leveraging the strengths of diverse architectures, improving both classification accuracy and robustness. This approach proves to be particularly effective for real-world applications in plant disease management.

**Published in:** [2025 International Conference on Electrical, Computer and Communication Engineering (ECCE)](https://ieeexplore.ieee.org/xpl/conhome/11012671/proceeding)  
**Date of Conference:** 13-15 February 2025  
**Date Added to IEEE *Xplore*:** 29 May 2025  
**ISBN Information:**  
**Electronic ISBN:**979-8-3503-5750-9  
**Print on Demand(PoD) ISBN:**979-8-3503-5751-6  
**DOI:** [10.1109/ECCE64574.2025.11013222](https://doi.org/10.1109/ECCE64574.2025.11013222)  
**Publisher:** IEEE

Dataset: Bangladeshi Crops Disease Dataset (BCDD)  
Curated benchmark of 5 crops (Rice, Wheat, Corn, Potato, Tomato) with 19 disease  
\# 🇧🇩 Bangladeshi Crops Disease Dataset (BCDD)

\!\[Images\](https://img.shields.io/badge/Images-8%2C992-blue?style=for-the-badge\&logo=google-photos\&logoColor=white)  
\!\[Classes\](https://img.shields.io/badge/Classes-19-green?style=for-the-badge\&logo=google-lens\&logoColor=white)  
\!\[Crops\](https://img.shields.io/badge/Crops-5-orange?style=for-the-badge\&logo=leaf\&logoColor=white)  
\!\[License\](https://img.shields.io/badge/License-CC--BY--4.0-lightgrey?style=for-the-badge)

\#\# 📄 Context  
\*\*BCDD\*\* is the official dataset curated for the research paper:

\&gt; \*\*"Plant Disease Recognition from the Perspective of Bangladesh: A Comparative Study of Deep Learning Models and Ensemble Techniques"\*\*  
\&gt;  
\&gt; \*Presented at: 2025 International Conference on Electrical, Computer and Communication Engineering (ECCE)\*

Plant disease detection is critical for food security in agricultural nations like Bangladesh. This dataset aggregates and standardizes images of \*\*5 major crops\*\* (Corn, Potato, Rice, Tomato, Wheat) to establish a unified benchmark for South Asian agricultural research. It combines data from three public repositories to form a balanced \*\*19-class\*\* dataset.

\---

\#\# 💾 Dataset Specifications

| Feature | Details |  
| :--- | :--- |  
| \*\*Total Images\*\* | \*\*8,992\*\* (Augmented) |  
| \*\*Crops\*\* | 5 (Corn, Potato, Rice, Tomato, Wheat) |  
| \*\*Classes\*\* | 19 (Healthy & Diseased) |  
| \*\*Image Size\*\* | 96x96 pixels |  
| \*\*Preprocessing\*\* | Normalized to \`\[-1, 1\]\` |

\*\*Normalization Formula:\*\*  
$$I' \= \\frac{I}{127.5} \- 1$$  
\*(Where $I$ is the pixel value in $\[0, 255\]$)\*

\---

\#\# 📂 Directory Structure  
The dataset is pre-partitioned for immediate benchmarking:

| Split | Count | Percentage | Description |  
| :--- | :---: | :---: | :--- |  
| \*\*\`train/\`\*\* | 6,744 | 70% | Training set |  
| \*\*\`val/\`\*\* | 1,348 | 15% | Validation set |  
| \*\*\`test/\`\*\* | 900 | 15% | Testing set |

\---

\#\# 🌿 Class Labels (19 Classes)

\#\#\# 🌽 Corn (Maize)  
1\.  \`Corn\_(maize)\_\_\_Cercospora\_leaf\_spot Gray\_leaf\_spot\`  
2\.  \`Corn\_(maize)\_\_\_Common\_rust\_\`  
3\.  \`Corn\_(maize)\_\_\_Northern\_Leaf\_Blight\`  
4\.  \`Corn\_(maize)\_\_\_healthy\`

\#\#\# 🥔 Potato  
5\.  \`Potato\_\_\_Early\_blight\`  
6\.  \`Potato\_\_\_Late\_blight\`  
7\.  \`Potato\_\_\_healthy\`

\#\#\# 🍚 Rice  
8\.  \`Rice\_bacterial\_leaf\_blight\`  
9\.  \`Rice\_brown\_spot\`  
10\. \`Rice\_leaf\_blast\`  
11\. \`Rice\_healthy\`

\#\#\# 🍅 Tomato  
12\. \`Tomato\_\_\_Bacterial\_spot\`  
13\. \`Tomato\_\_\_Early\_blight\`  
14\. \`Tomato\_\_\_Late\_blight\`  
15\. \`Tomato\_\_\_healthy\`

\#\#\# 🌾 Wheat  
16\. \`Wheat Brown rust\`  
17\. \`Wheat Loose Smut\`  
18\. \`Wheat Yellow rust\`  
19\. \`Wheat Healthy\`

\---

\#\# 🛡️ Data Provenance  
We gratefully acknowledge the original sources used to construct this curated subset:  
\-   \*\*Wheat Leaf Disease Dataset\*\* (Zhang et al.)  
\-   \*\*Rice Leaf Disease Dataset\*\* (Hossain et al.)  
\-   \*\*PlantVillage Dataset\*\* (Hughes et al.)

\*\*Collection Methodology:\*\*  
The dataset is a curated subset of the above repositories, focusing on crops relevant to Bangladesh. Images were resized to 96x96 pixels and augmented using rotation, flipping, and grayscale conversion to ensure robustness.

\---

\#\# 🚀 Associated Resources  
| Resource | Link |  
| :--- | :--- |  
| \*\*GitHub Code\*\* | \[\!\[GitHub\](https://img.shields.io/badge/GitHub-Repo-black?style=flat\&logo=github)\](https://github.com/MusfiqurTuhin/Plant-Disease-Recognition-from-the-Perspective-of-Bangladesh.git) |  
| \*\*Hugging Face\*\* | \[\!\[Hugging Face\](https://img.shields.io/badge/Hugging%20Face-Dataset-yellow?style=flat\&logo=huggingface)\](https://huggingface.co/datasets/musfiqurtuhin/BCDD) |  
| \*\*Paper\*\* | \[\!\[IEEE\](https://img.shields.io/badge/IEEE-Xplore-blue?style=flat\&logo=ieee)\](https://ieeexplore.ieee.org/abstract/document/11013222) |  
https://www.kaggle.com/datasets/musfiqurtuhin/bangladeshi-crops-disease-dataset-bcdd  
\---

\#\# 📝 Citation  
If you use this dataset in your research, please cite our \*\*ECCE 2025\*\* paper:

\`\`\`bibtex  
@InProceedings{11013222,  
  author={Rahman, Md. Musfiqur and Tusher, Md Mahbubur Rahman and Rinky, Susmita Roy and Mokit, Junaid Rahman and Biswas, Sudipa},  
  booktitle={2025 International Conference on Electrical, Computer and Communication Engineering (ECCE)},   
  title={Plant Disease Recognition from the Perspective of Bangladesh: A Comparative Study of Deep Learning Models and Ensemble Techniques},   
  year={2025},  
  pages={1-6},  
  doi={10.1109/ECCE64574.2025.11013222}  
}

………………………………

A Comparative Analysis of Various Deep Learning Models for Traffic Signs Recognition from the Perspective of Bangladesh  
A Comparative Analysis of Various Deep Learning Models for Traffic Signs Recognition from the Perspective of Bangladesh  
Conference paper  
First Online: 30 March 2024  
pp 547–557  
Cite this conference paper

Proceedings of the 2nd International Conference on Big Data, IoT and Machine Learning  
(BIM 2023\)  
Md. Mahbubur Rahman Tusher, Hasan Muhammad Kafi, Susmita Roy Rinky, Muhiminul Islam & Md. Musfiqur Rahman   
Part of the book series: Lecture Notes in Networks and Systems ((LNNS,volume 867))

Included in the following conference series:

International Conference on Big Data, IoT and Machine Learning  
682 Accesses

3 Citations

Abstract  
As they play a significant role in autonomous driving and traffic safety, traffic sign identification and recognition have recently emerged as one of the most significant fields in image processing and computer vision. Early studies in this field offered several deep learning-based methods for classifying distinct traffic signs using various standard datasets. However, not many researchers focused on creating a dataset of traffic signs in Bangladesh and applying deep learning techniques to recognize them. In this research, we compare and contrast several deep learning models for recognizing traffic signs from the perspective of Bangladesh. We construct a novel dataset with over 2000 images representing thirteen distinct kinds of typical traffic signs in Bangladesh. Using data augmentation, about 8386 images are generated from the original dataset. Subsequently, transfer learning and fine-tuning approaches are applied to nine different deep learning models using this dataset, and the outcomes are compared. Results indicate that ViT had the highest validation accuracy of 99.91% for fine-tuning, while DenseNet201 had the highest validation accuracy of 99.86% for transfer learning. Almost all models attained excellent training and validation accuracy levels, showing that they were able to successfully learn the dataset’s characteristics.

\# 🇧🇩 Bangladeshi Traffic Signs (BTSR-13)

\!\[Images\](https://img.shields.io/badge/Images-8%2C386-blue?style=for-the-badge\&logo=google-photos\&logoColor=white)  
\!\[Classes\](https://img.shields.io/badge/Classes-13-green?style=for-the-badge\&logo=google-lens\&logoColor=white)  
\!\[Format\](https://img.shields.io/badge/Format-JPG-orange?style=for-the-badge\&logo=file-image\&logoColor=white)  
\!\[License\](https://img.shields.io/badge/License-CC--BY--4.0-lightgrey?style=for-the-badge)

\#\# 📄 Context  
\*\*BTSR-13\*\* is the official dataset for the conference paper:

\&gt; \*\*"\[A Comparative Analysis of Various Deep Learning Models for Traffic Signs Recognition from the Perspective of Bangladesh\](https://doi.org/10.1007/978-981-99-8937-9\_37)"\*\*  
\&gt;  
\&gt; \*Published at: International Conference on Big Data, IoT and Machine Learning (BIM)\*

Recognizing traffic signs in South Asian environments is challenging due to visual clutter, faded paint, and diverse lighting. Existing datasets (like GTSRB) do not represent these conditions. \*\*BTSR-13\*\* addresses this gap by providing a balanced, high-quality benchmark for local traffic sign recognition.

\---

\#\# 🔗 Quick Links

| Resource | Link | Description |  
|:---------|:-----|:-----------|  
| 📄 \*\*Paper\*\* | \[\!\[Springer\](https://img.shields.io/badge/Springer-DOI-blue?style=flat\&logo=springer)\](https://doi.org/10.1007/978-981-99-8937-9\_37) | Full conference paper with methodology & results |  
| 🐙 \*\*GitHub\*\* | \[\!\[GitHub\](https://img.shields.io/badge/GitHub-Repo-black?style=flat\&logo=github)\](https://github.com/MusfiqurTuhin/Traffic-Sign-Recognition-Bangladesh-BIM) | Complete source code & experiment notebooks |  
| 🤗 \*\*Hugging Face\*\* | \[\!\[Hugging Face\](https://img.shields.io/badge/Hugging%20Face-Dataset-yellow?style=flat\&logo=huggingface)\](https://huggingface.co/datasets/musfiqurtuhin/BTSR-13) | Direct Python loading via \`datasets\` library |  
| 🐍 \*\*Kaggle\*\* | \[\!\[Kaggle\](https://img.shields.io/badge/Kaggle-Dataset-blue?style=flat\&logo=kaggle)\](https://www.kaggle.com/datasets/tusher7575/traffic-sign-in-bangladesh) | Primary dataset hosting with DOI |

\---

\#\# 💾 Dataset Specifications

| Feature | Details |  
| :--- | :--- |  
| \*\*Total Images\*\* | \*\*8,386\*\* |  
| \*\*Classes\*\* | 13 (Bangladeshi traffic sign categories) |  
| \*\*Format\*\* | JPG |  
| \*\*Split\*\* | Train (70%), Validation (20%), Test (10%) |

\#\#\# Data Split  
\- \*\*Train:\*\* 5,863 images  
\- \*\*Validation:\*\* 1,671 images  
\- \*\*Test:\*\* 852 images

\---

\#\# 📸 Data Collection & Augmentation

To ensure model robustness across different camera sensors and real-world conditions, the data was curated using a rigorous methodology:

\- \*\*Hardware Sources:\*\* Captured using three distinct smartphone sensors (OnePlus Nord N10, Poco X4 Pro, Realme X2) to introduce device diversity.  
\- \*\*Augmentation Pipeline:\*\* The original \~2,000 images were expanded using:  
    \- Random Scaling & Rotation  
    \- Grayscale Conversion (to test color invariance)  
    \- Gaussian Blurring (to simulate motion/focus blur)

\---

\#\# 📊 Class Distribution (Balanced)

The dataset is highly balanced, ensuring models do not develop bias toward specific classes.

| Class Name | Image Count | Description |  
|:-----------|:-----------:|:-----------|  
| Side road right | 660 | Warning for side road entry from right |  
| Crossroad | 658 | Intersection warning |  
| Left turn | 658 | Mandatory or warning left turn |  
| Market in front | 658 | Caution for crowded market areas |  
| Side road left | 656 | Warning for side road entry from left |  
| College in front | 657 | Slow down for educational institution |  
| Pedestrian crossing | 654 | Zebra crossing warning |  
| Mosque in front | 653 | Caution for religious establishment |  
| Speed breaker | 653 | Warning for bumps/humps |  
| Speed limit | 652 | Regulatory speed limit sign |  
| Rail crossing | 647 | Railway level crossing warning |  
| School in front | 644 | School zone warning |  
| Right turn | 636 | Mandatory or warning right turn |  
| \*\*TOTAL\*\* | \*\*8,386\*\* | |

\---

\#\# 📂 Directory Structure

The dataset is organized into standard \`train\`, \`val\`, and \`test\` directories, compatible with PyTorch \`ImageFolder\` or TensorFlow \`flow\_from\_directory\`:

\`\`\`bash  
BTSR-13/  
├── test/           \# 852 images (10%)  
│   ├── College in front/  
│   ├── Crossroad/  
│   └── ... (13 classes)  
│  
├── train/          \# 5,863 images (70%)  
│   ├── College in front/  
│   ├── Crossroad/  
│   └── ... (13 classes)  
│  
└── val/            \# 1,671 images (20%)  
    ├── College in front/  
    ├── Crossroad/  
    └── ... (13 classes)  
\`\`\`

\---

\#\# 🧠 Model Benchmarks

This dataset was used to benchmark \*\*9 deep learning architectures\*\*.

\#\#\# 🏆 Top Performers

| Rank | Model | Validation Accuracy |  
|:----:|:------|:------------------:|  
| 🥇 | \*\*DenseNet201\*\* | \*\*98.76%\*\* |  
| 🥈 | \*\*Vision Transformer (ViT)\*\* | \*\*97.92%\*\* |  
| 🥉 | \*\*VGG19\*\* | \*\*97.06%\*\* |

\#\#\# Full Results

| Model | Training Accuracy | Validation Accuracy |  
|:------|:-----------------:|:------------------:|  
| DenseNet201 | 97.47% | 98.76% |  
| Vision Transformer (ViT) | 97.54% | 97.92% |  
| MobileNetV2 | 97.37% | 96.75% |  
| NASNetLarge | 96.22% | 94.57% |  
| Xception | 96.10% | 95.67% |  
| VGG19 | 93.37% | 97.06% |  
| InceptionV3 | 93.68% | 94.55% |  
| ResNet101 | 77.05% | 78.38% |  
| EfficientNetB2 | 44.73% | 49.35% |

\&gt; \*\*Key Finding:\*\* DenseNet201 achieved the highest validation accuracy (98.76%), demonstrating superior generalization on Bangladeshi traffic sign recognition tasks.

\---

\#\# 🚀 Quick Start

\#\#\# Option 1: From Hugging Face (Recommended)

\`\`\`python  
from datasets import load\_dataset

\# Load directly without downloading  
dataset \= load\_dataset("musfiqurtuhin/BTSR-13")

train\_data \= dataset\['train'\]  
val\_data \= dataset\['validation'\]  
test\_data \= dataset\['test'\]  
\`\`\`

\#\#\# Option 2: From Kaggle

1\. Download \`BTSR-13.zip\` from Kaggle  
2\. Extract to your working directory  
3\. Load with your preferred framework:

\`\`\`python  
from torchvision import datasets

\# PyTorch  
train\_dataset \= datasets.ImageFolder('BTSR-13/train')

\# TensorFlow  
train\_gen \= tf.keras.preprocessing.image.ImageDataGenerator()  
train\_data \= train\_gen.flow\_from\_directory('BTSR-13/train')  
\`\`\`

\---

\#\# 📝 Citation

If you use the BTSR-13 dataset in your research, please cite our work:

\`\`\`bibtex  
@InProceedings{10.1007/978-981-99-8937-9\_37,  
  author="Tusher, M.M.R. and Kafi, H.M. and Rinky, S.R. and Islam, M. and Rahman, M.M.",  
  title="A Comparative Analysis of Various Deep Learning Models for Traffic Signs Recognition from the Perspective of Bangladesh",  
  booktitle="Proceedings of the 2nd International Conference on Big Data, IoT and Machine Learning (BIM)",  
  year="2024",  
  publisher="Springer Nature Singapore",  
  doi="10.1007/978-981-99-8937-9\_37"  
}  
\`\`\`

\---

\#\# 🤝 Acknowledgments

\- Data collection team from \*\*Bangladesh Army University of Science and Technology (BAUST)\*\* and \*\*United International University (UIU)\*\*  
\- \*\*Kaggle\*\* community for providing the primary hosting platform  
\- \*\*Hugging Face\*\* for dataset mirroring and accessibility

\---

\#\# 📬 Support

For questions, issues, or suggestions:  
\- \*\*GitHub Issues:\*\* \[Report on GitHub\](https://github.com/MusfiqurTuhin/Traffic-Sign-Recognition-Bangladesh-BIM/issues)  
\- \*\*Kaggle Discussion:\*\* Check the Kaggle dataset discussion section  
\- \*\*Authors:\*\* Contact via the GitHub repository  
https://www.kaggle.com/datasets/musfiqurtuhin/bangladeshi-traffic-signs-btsr-13  
\---

\#\# ⚖️ License

This dataset is provided for academic and research purposes. Please review the license terms on both Kaggle and Hugging Face platforms.  
…………….

A Comparative Analysis of Various Deep Learning Models for Traffic Signs Recognition from the Perspective of Bangladesh — Published at Springer Nature, Conference: BIM 2023\. – Built a novel Bangladeshi traffic sign dataset (2K+ images, 13 classes) – Evaluated 9 models; ViT achieved 99.91%. \# Supervisor: Hasan Muhammad Kafi, Assistant Professor, BAUST.   
……………………

# 

# **Bengali Fake News Detection: A Multi-Layered LSTM Ensemble Approach**

**Publisher: IEEE**

Cite This

PDF

[Susmita Roy Rinky](https://ieeexplore.ieee.org/author/745597243732804); [Md. Mahbubur Rahman Tusher](https://ieeexplore.ieee.org/author/480550760524006); [Md. Musfiqur Rahman](https://ieeexplore.ieee.org/author/37089013506); [Prithweeraj Acharjee Porag](https://ieeexplore.ieee.org/author/146371204065620); [Jahidul Islam](https://ieeexplore.ieee.org/author/37089515659); [Abu Saleh Musa Miah](https://ieeexplore.ieee.org/author/37086860965)  
**All Authors**  
**27**  
Full  
Text Views

*   
*   
*   
*   
* 

---

[**Abstract**](https://ieeexplore.ieee.org/document/11171927)

## Document Sections

* I.  
* Introduction  
* II.  
* Literature Review  
* III.  
* Dataset Description  
* IV.  
* Proposed Methodology  
* V.  
* Result Analysis and Discussion

**Show Full Outline**  
[Authors](https://ieeexplore.ieee.org/document/11171927/authors)  
[Figures](https://ieeexplore.ieee.org/document/11171927/figures)  
[References](https://ieeexplore.ieee.org/document/11171927/references)  
[Keywords](https://ieeexplore.ieee.org/document/11171927/keywords)  
[Metrics](https://ieeexplore.ieee.org/document/11171927/metrics)

## **Abstract:**

In the contemporary digital landscape, combatting the The fight with the spread of fake news remains an utmost challenge in the contemporary digital industry that affects everything from political forces to public opinion. Since most available studies tend to focus on detecting misinformation through obscure newspapers or rumors on Facebook, our study diverges from this trend, primarily focusing on mainstream Bangladeshi journalism. Taking a critical review of credible sources to include top TVs and newspapers, our work propounds a new direction in the field of fake news detection. As we tap into their long-standing credibility and high readership counts, we have a very strong database to back our ensemble model. A good model would use a special type of recurrent neural network, known as Long Short-Term Memory (LSTM) networks, to be able to take care of the sequence data, which is inherent in news content. Our rigorous experiments and model iterations result in an accuracy rate of 82.43 %, which stands remarkably high vis-à-vis previous benchmarks. These give a high motivation for our approach toward accurately discerning which piece of news is authentic and which one is fabricated.

**Published in:** [2025 International Conference on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN)](https://ieeexplore.ieee.org/xpl/conhome/11171612/proceeding)  
**Date of Conference:** 31 July 2025 \- 02 August 2025  
**Date Added to IEEE *Xplore*:** 29 September 2025  
**ISBN Information:**  
**Electronic ISBN:**979-8-3315-9694-1  
**Print on Demand(PoD) ISBN:**979-8-3315-9695-8  
**DOI:** [10.1109/QPAIN66474.2025.11171927](https://doi.org/10.1109/QPAIN66474.2025.11171927)  
**Publisher:** IEEE  
\# 🇧🇩 Bengali Fake News Detection Dataset

\!\[Language\](https://img.shields.io/badge/Language-Bengali-green?style=for-the-badge\&logo=google-translate\&logoColor=white)  
\!\[Task\](https://img.shields.io/badge/Task-Fake%20News%20Detection-red?style=for-the-badge\&logo=mediafire\&logoColor=white)  
\!\[Size\](https://img.shields.io/badge/Size-12K%20Docs-blue?style=for-the-badge\&logo=files\&logoColor=white)  
\!\[License\](https://img.shields.io/badge/License-CC--BY--4.0-lightgrey?style=for-the-badge)

\#\# 📄 Context  
\*\*Official dataset\*\* for the research paper:  
\&gt; \*\*"Bengali Fake News Detection: A Multi-Layered LSTM Ensemble Approach"\*\*  
\&gt; \*Published in: 2025 International Conference on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN)\*

In the digital age, fake news affects everything from political stability to public opinion. While most studies focus on social media rumors, our work diverges by focusing on \*\*mainstream Bangladeshi journalism\*\*. This dataset aggregates news from credible top TV channels and newspapers to provide a robust benchmark for authentic vs. fabricated news detection.

\---

\#\# 🔗 Associated Resources

| Resource | Link |  
| :--- | :--- |  
| 📄 \*\*Paper (IEEE Xplore)\*\* | \[\!\[IEEE\](https://img.shields.io/badge/IEEE-Xplore-blue?style=flat\&logo=ieee)\](https://ieeexplore.ieee.org/abstract/document/11171927) |  
| 🐙 \*\*GitHub Repository\*\* | \[\!\[GitHub\](https://img.shields.io/badge/GitHub-Repo-black?style=flat\&logo=github)\](https://github.com/MusfiqurTuhin/Bengali-Fake-News-Detection) |  
| 🤗 \*\*Hugging Face\*\* | \[\!\[Hugging Face\](https://img.shields.io/badge/Hugging%20Face-Dataset-yellow?style=flat\&logo=huggingface)\](https://huggingface.co/datasets/musfiqurtuhin/bengali-fake-news) |  
[https://www.kaggle.com/datasets/musfiqurtuhin/bengali-fake-news-detection-dataset](https://www.kaggle.com/datasets/musfiqurtuhin/bengali-fake-news-detection-dataset)

\---

\#\# 💾 Dataset Specifications

The dataset contains \*\*11,839 documents\*\* collected from mainstream news media, balanced between authentic and fake news.

| Feature | Details |  
| :--- | :--- |  
| \*\*Total Documents\*\* | \*\*11,839\*\* |  
| \*\*Authentic (Label 1)\*\* | 6,000 documents |  
| \*\*Fake (Label 0)\*\* | 5,839 documents |  
| \*\*Total Words\*\* | 187,127 unique words |  
| \*\*Language\*\* | Bengali (Bangla) |

\#\#\# 📝 Column Description

| Column | Description |  
| :--- | :--- |  
| \`domain\` | The source publication or website (e.g., Ittefaq). |  
| \`category\` | The news category (e.g., National, Sports). |  
| \`headline\` | The title of the news article. |  
| \`content\` | The full text of the news article. |  
| \`label\` | \*\*\`1\`\*\* for Authentic, \*\*\`0\`\*\* for Fake. |

\---

\#\# 🧠 Benchmarks

The dataset was benchmarked using a \*\*Multi-Layered LSTM Ensemble\*\* model, achieving an accuracy of \*\*82.43%\*\*.

\---

\#\# 🤝 Citation

If you use this dataset, please cite our work:

\`\`\`bibtex  
@INPROCEEDINGS{11171927,  
  author={Rinky, Susmita Roy and Tusher, Md. Mahbubur Rahman and Rahman, Md. Musfiqur and Porag, Prithweeraj Acharjee and Islam, Jahidul and Miah, Abu Saleh Musa},  
  booktitle={2025 International Conference on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN)},   
  title={Bengali Fake News Detection: A Multi-Layered LSTM Ensemble Approach},   
  year={2025},  
  pages={1-6},  
  doi={10.1109/QPAIN66474.2025.11171927}  
}  
\`\`\`

\---

\#\# 📬 Contact

For questions, please contact the authors via the \[GitHub Repository\](https://github.com/MusfiqurTuhin/Bengali-Fake-News-Detection).

…………………….  
A Reproducible Benchmark for Prompt Injection Vulnerability Assessment in Small-to-Medium Language Models – Standardized framework for prompt-injection assessment with 2,250 model–prompt tests and dual-judge eval. (Accepted and Presented at ICCIT 2025, awaiting online publication at ieee explore) \# Supervisor: Mir Moynuddin Ahmed Shibly, Assistant Professor, UIU. • Predictive and Economic Assessment of Methane Emissions from Bio-Slurry Amended Systems using Ensemble Machine Learning – Predicts methane emissions; ensemble ML achieves R 2 \= 0.66 and 69% classification using SHAP features. (Accepted and Presented at  STI 2025, awaiting online publication at ieee explore) • Deep Learning-Based Recognition of Recaptured Images for Digital Media Authentication – Detects recaptured images; DenseNet201/Xception reach 99% on RGB and Canny inputs. (Accepted and Presented at  ICCIT 2025, awaiting online publication at ieee explore)

Multi-Level Ensemble Learning for Fine-Grained Classification of Traditional Bangladeshi Dress Using Deep Transfer Models – Fine-grained Bangladeshi dress classification; ensemble learning achieves 96.75% accuracy. (Accepted and Presented at EICT 2025, awaiting online publication at ieee explore)

