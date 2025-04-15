#!/usr/bin/env python3
"""
Script to download SVG illustrations from unDraw for Wakily.sa website
Requires: requests library (pip install requests)
"""

import os
import requests
import time

# Create the directory if it doesn't exist
os.makedirs('app/static/images', exist_ok=True)

# List of illustrations to download with their unDraw names and our local filenames
ILLUSTRATIONS = [
    # AI Agents
    {
        "url": "https://undraw.co/illustrations/artificial-intelligence-e4bi.svg",
        "filename": "ai-agent-customer-service.svg"
    },
    {
        "url": "https://undraw.co/illustrations/automation-re-kj1u.svg",
        "filename": "ai-agent-automation.svg"
    },
    {
        "url": "https://undraw.co/illustrations/business-analytics-u7m1.svg",
        "filename": "ai-agent-sales.svg"
    },
    
    # Data Science
    {
        "url": "https://undraw.co/illustrations/data-processing-5kbx.svg",
        "filename": "data-science.svg"
    },
    
    # LLM Tuning
    {
        "url": "https://undraw.co/illustrations/artificial-intelligence-jf6l.svg",
        "filename": "llm-tuning.svg"
    },
    
    # Agentic Products
    {
        "url": "https://undraw.co/illustrations/revenue-3-yb2g.svg",
        "filename": "sales-assistant.svg"
    },
    
    # Software Development
    {
        "url": "https://undraw.co/illustrations/programming-re-kg9v.svg",
        "filename": "software-development.svg"
    },
    
    # Government Solutions
    {
        "url": "https://undraw.co/illustrations/government-7q08.svg",
        "filename": "government-solutions.svg"
    }
]

def download_illustration(url, filename):
    """Download an SVG illustration from the given URL and save it to the static/images folder"""
    try:
        response = requests.get(url)
        if response.status_code == 200:
            save_path = os.path.join('app/static/images', filename)
            with open(save_path, 'wb') as f:
                f.write(response.content)
            print(f"✅ Downloaded: {filename}")
            return True
        else:
            print(f"❌ Failed to download {filename}: HTTP {response.status_code}")
            return False
    except Exception as e:
        print(f"❌ Error downloading {filename}: {str(e)}")
        return False

def main():
    """Main function to download all illustrations"""
    print("Starting to download illustrations from unDraw...")
    
    success_count = 0
    for illustration in ILLUSTRATIONS:
        if download_illustration(illustration["url"], illustration["filename"]):
            success_count += 1
        # Be nice to the unDraw server and wait between downloads
        time.sleep(1)
    
    print(f"Download complete: {success_count}/{len(ILLUSTRATIONS)} illustrations downloaded")
    print(f"Illustrations saved to: app/static/images/")

if __name__ == "__main__":
    main() 